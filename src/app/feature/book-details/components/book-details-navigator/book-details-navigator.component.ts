import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-details-navigator',
  templateUrl: './book-details-navigator.component.html',
  styleUrls: ['./book-details-navigator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsNavigatorComponent {

  @Input('forBookWithId')
  currentBookId!: string;

  get nextBookId() {
    return +this.currentBookId! + 1;
  }

  get prevBookId() {
    return +this.currentBookId! - 1;
  }
}
