import { NgClass } from '@angular/common';
import {  Component } from '@angular/core';
import { RouterLink } from "@angular/router";


interface SidebarItem {
  label: string;
  icon: string;
  route?: string;
  badge?: string;
  badgeColor?: string;
}
@Component({
  selector: 'app-aside',
  imports: [RouterLink, NgClass],
  templateUrl: './aside.component.html',
})
export class AsideComponent {


  items: SidebarItem[] = [
    {
      label: 'Dashboard',
      route: '/panel/dashboard',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0.3" d="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z;M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"/></path><path d="M8 8h8M8 12h8M8 16h5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M8 8h8M8 12h8M8 16h5;M10 6h8M10 10h8M10 14h5"/></path><path stroke-dasharray="36" stroke-dashoffset="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.5s" values="36;0"/></path></g></svg>',
    },
    {
      label: 'comparacion por pais',
      route: '/panel/by-country',
      icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="18" rx="1"/>
          <rect x="14" y="3" width="7" height="13" rx="1"/>
        </g>
      </svg>
      `,
    },

  ];
}
