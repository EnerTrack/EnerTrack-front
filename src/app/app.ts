import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutPageComponent } from "./public/pages/layout-page/layout-page.components";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  protected readonly title = signal('EnerTrack');
}
