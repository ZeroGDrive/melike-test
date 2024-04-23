import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ml-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ml-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MlSearchInputComponent {
  search = model<string>('');
}
