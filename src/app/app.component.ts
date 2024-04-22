import { Component } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideBarComponent, DiscoverPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
