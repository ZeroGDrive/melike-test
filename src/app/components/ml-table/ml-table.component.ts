import { CurrencyPipe, NgClass, PercentPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Stock } from '../../stocks.service';
import { MlButtonComponent } from '../ml-button/ml-button.component';

@Component({
  selector: 'app-ml-table',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, MlButtonComponent, NgClass],
  templateUrl: './ml-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MlTableComponent {
  stocks = input.required<Stock[]>();
  rowClick = output<Stock>();

  onRowClick(stock: Stock) {
    this.rowClick.emit(stock);
  }
}
