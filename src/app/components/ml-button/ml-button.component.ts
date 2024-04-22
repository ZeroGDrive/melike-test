import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ml-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      [ngClass]="variantStyling[variant()]"
      class="flex size-full min-w-[79px] items-center justify-center rounded-[6px] text-sm font-medium text-white"
    >
      <img src="assets/icons/{{ variant() }}.svg" alt="button icon" />
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MlButtonComponent {
  variant = input.required<'sell' | 'buy'>();

  variantStyling = {
    sell: 'bg-danger [&>img]:size-5 [&>img]:mr-[5px] hover:bg-danger/90 transition duration-300',
    buy: 'bg-success [&>img]:size-[18px] [&>img]:mr-[5px] hover:bg-success/90 transition duration-300',
  };
}
