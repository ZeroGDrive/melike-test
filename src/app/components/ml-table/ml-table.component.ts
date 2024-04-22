import { CurrencyPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MlButtonComponent } from '../ml-button/ml-button.component';

@Component({
  selector: 'app-ml-table',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, MlButtonComponent],
  templateUrl: './ml-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MlTableComponent {}
