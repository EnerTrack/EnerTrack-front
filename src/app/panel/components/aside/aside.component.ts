import { Component, inject, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../auth/services/auth.service';

interface SidebarItem {
  label: string;
  icon?: string;
  route?: string;
  badge?: string;
  badgeColor?: string;
  children?: SidebarItem[];
}

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './aside.component.html',
})
export class AsideComponent implements OnInit {
  ngOnInit() {
    initFlowbite();
  }

  authService = inject(AuthService);

  items: SidebarItem[] = [
    {
      label: 'Dashboard',
      route: '/panel/dashboard',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"/>
        </svg>
      `,
    },
    {
      label: 'Comparación por país',
      route: '/panel/by-country',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="18" rx="1"/>
            <rect x="14" y="3" width="7" height="13" rx="1"/>
          </g>
        </svg>
      `,
    },
  ];
}
