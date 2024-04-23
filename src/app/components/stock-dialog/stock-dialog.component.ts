import { CurrencyPipe, NgClass, PercentPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  effect,
  model,
  viewChild,
} from '@angular/core';
import { Stock } from '../../stocks.service';
import { MlButtonComponent } from '../ml-button/ml-button.component';

@Component({
  selector: 'app-stock-dialog',
  standalone: true,
  imports: [PercentPipe, NgClass, CurrencyPipe, MlButtonComponent],
  templateUrl: './stock-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDialogComponent {
  dialogElement = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  stock = model<Stock | null>(null);

  @HostListener('click', ['$event.target']) onDialogClick(event: any) {
    if (event === this.dialogElement()?.nativeElement) {
      this.close();
    }
  }

  openModal = effect(() => {
    if (this.stock()) {
      console.log(this.dialogElement());
      this.dialogElement()?.nativeElement?.showModal();
    }
  });

  close() {
    this.dialogElement()?.nativeElement?.close();
    this.stock.set(null);
  }
}
