import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../auth/services/auth.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-nav-panel',
  imports: [RouterLink],
  templateUrl: './nav-panel.component.html',
})
export class NavPanelComponent{


  AuthService = inject(AuthService);
}
