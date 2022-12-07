import {Component} from '@angular/core';
import {EMPTY, Observable} from "rxjs";

import {BookModel} from "./book.model";
import {BookRestService} from "../../core/book-rest.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books$:Observable<BookModel[]> = EMPTY;

  constructor(bookRestService: BookRestService) {

    this.books$ = bookRestService.getBooks();

  }


  bookSelected(book: BookModel) {
    alert(book);
  }
}
