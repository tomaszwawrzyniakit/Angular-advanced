import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {BookModel} from "../../book.model";

@Component({
  selector: 'app-book-table[books]',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookTableComponent {
  @Input()
  books: BookModel[] | null = [];

  @Output()
  bookSelected = new EventEmitter<BookModel>();

  selectBook(book: BookModel) {
    this.bookSelected.emit(book);
  }
}
