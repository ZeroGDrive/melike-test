import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { MlSearchInputComponent } from '../components/ml-search-input/ml-search-input.component';
import { MlTableComponent } from '../components/ml-table/ml-table.component';
import { StockDialogComponent } from '../components/stock-dialog/stock-dialog.component';
import { Stock, StocksService } from '../stocks.service';

@Component({
  selector: 'app-discover-page',
  standalone: true,
  imports: [
    MlTableComponent,
    MlSearchInputComponent,
    AsyncPipe,
    StockDialogComponent,
  ],
  templateUrl: './discover-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscoverPageComponent {
  readonly #stocksService = inject(StocksService);

  readonly stocksLive$ = this.#stocksService.getStocksData();
  search = signal<string>('');
  selectedStock = signal<Stock | null>(null);

  searchEffect = effect(() => {
    this.#stocksService.search$.next(this.search());
  });
}
