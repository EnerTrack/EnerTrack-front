import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from '../../environments/environments.prod';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { LoginRequest } from '../interfaces/loginRequest.interface';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authStatus = signal<AuthStatus>('checking');
  private _token = signal<string | null>(localStorage.getItem('token'));
  private _user = signal<string | null>(null);

  private http = inject(HttpClient);
  private baseULR: string = environment.baseURL;

  checkStatusResource = rxResource({
    stream: () => this.validateToken()
  })

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') return 'checking'

    if (localStorage.getItem("token")) {
      return 'authenticated'
    }
    return 'not-authenticated'
  })

  user = computed<string | null>(() => this._user());
  token = computed(this._token);


  login(login: LoginRequest): Observable<boolean> {
    return this.http.post<AuthResponse>(`${this.baseULR}/auth/auth/login`, login).pipe(
      map(resp => this.handleAuthSuccess(resp)),

      catchError(err => this.handleAuthError(err))
    );
  }

  validateToken(): Observable<boolean> {

    const token = localStorage.getItem('token');

    if (!token) {
      this.logout()
      return of(false);
    }

    const params = new HttpParams().set('accessToken', token);

    return this.http.post<AuthResponse>(
      `${this.baseULR}/auth/auth/jwt`,
      null,
      {headers: {accessToken: token}}
    ).pipe(
      tap(resp => this.handleAuthSuccess(resp)),
      map(() => true),
      catchError(err => this.handleAuthError(err))
    );
  }

  logout() {
    this._user.set(null);
    this._token.set(null);
    this._authStatus.set('not-authenticated');


    localStorage.removeItem('token')
  }

  private handleAuthSuccess(resp: AuthResponse) {
    // this._user.set(resp.username);
    this._authStatus.set('authenticated');
    this._token.set(resp.accessToken);
    localStorage.setItem('token', resp.accessToken);

    return true
  }

  private handleAuthError(error: any) {

    this.logout();
    return of(false);
  }
}
