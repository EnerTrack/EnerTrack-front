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

      `,
    },
    {
      label: 'Comparación por país',
      route: '/panel/by-country',
      icon: `
       
      `,
    },
  ];
}
