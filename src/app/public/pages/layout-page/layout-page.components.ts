import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { AboutUsComponet } from "../about-us/about-us.componet";
import { PublicNavbarComponent } from '../../components/public-navbar/public-navbar.component';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-layout-page-public',
  imports: [HeroSectionComponent, AboutUsComponet, PublicNavbarComponent, RouterOutlet],
  templateUrl: './layout-page.components.html',

})
export class LayoutPageComponent implements OnInit {
  ngOnInit() {
    initFlowbite();
  }
}
