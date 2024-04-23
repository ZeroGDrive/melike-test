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
      timer(0, 5000).pipe(
        switchMap(() =>
          this.#httpClient
            .get<Stock[]>('assets/data.json')
            .pipe(map(this.randomizeData)),
        ),
      ),
    ]).pipe(
      map(([search, data]) =>
        data.filter((stock) =>
          stock.target.toLowerCase().includes(search.toLowerCase()),
        ),
      ),
    );
  }

  randomizeData(stocks: Stock[]): Stock[] {
    return stocks.map((stock) => {
      // changePercentage should be random and from -100 to 100
      const changePercentage = (Math.random() * 200 - 100) / 100;

      return {
        ...stock,
        price: stock.price + (Math.random() - 0.5) * 10,
        changePercentage,
        // changeToday should have the same sign as changePercentage and should be random
        changeToday: Math.sign(changePercentage) * Math.random() * 10,
      };
    });
  }
}
