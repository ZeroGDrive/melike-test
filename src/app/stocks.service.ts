import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map, switchMap, timer } from 'rxjs';

export type Stock = {
  id: number;
  target: string;
  logo: string;
  emblem: string;
  changeToday: number;
  changePercentage: number;
  price: number;
};

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  readonly #httpClient = inject(HttpClient);
  search$ = new BehaviorSubject<string>('');

  getStocksData() {
    return combineLatest([
      this.search$,
      timer(0, 10000).pipe(
        switchMap(() => this.#httpClient.get<Stock[]>('assets/data.json')),
      ),
    ]).pipe(
      map(([search, data]) =>
        data.filter((stock) =>
          stock.target.toLowerCase().includes(search.toLowerCase()),
        ),
      ),
    );
  }
}
