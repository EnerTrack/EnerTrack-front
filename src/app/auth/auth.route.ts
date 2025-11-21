import { Routes } from "@angular/router";
import { LoginPage } from "./pages/login-page/login-page";
import { AuthLayoutComponent } from "./layout/auth-layout.component/auth-layout.component";
import { Component } from "@angular/core";
import { RegisterPage } from "./pages/register-page/register-page";

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'register',
        component: RegisterPage
      },
      {
        path: '**',
        redirectTo: 'login',
      }
    ]
  }
];

export default authRoutes;
