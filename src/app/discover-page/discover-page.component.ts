import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MlTableComponent } from '../components/ml-table/ml-table.component';

@Component({
  selector: 'app-discover-page',
  standalone: true,
  imports: [MlTableComponent],
  templateUrl: './discover-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscoverPageComponent {}
