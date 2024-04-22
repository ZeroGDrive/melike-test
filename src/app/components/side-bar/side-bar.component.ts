import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './side-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  // putting them as objects in a list is because we might want to define routes, names and other stuff related to each item
  // the highlighted is normally would be by using router-link-active to know which route is currently active to highlight it
  sideBarItems = [
    {
      icon: 'home.svg',
    },
    {
      icon: 'stock.svg',
      highlighted: true,
    },
    {
      icon: 'piechart.svg',
    },
    {
      icon: 'bank.svg',
    },
    {
      icon: 'wallet.svg',
    },
    {
      icon: 'shield.svg',
    },
  ];
}
