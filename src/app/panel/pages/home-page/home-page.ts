import {  Component } from '@angular/core';
import { NavPanelComponent } from "../../components/nav-panel/nav-panel.component";
import { AsideComponent } from "../../components/aside/aside.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [NavPanelComponent, AsideComponent, RouterOutlet],
  templateUrl: './home-page.html',

})
export class HomePageComponent { }
