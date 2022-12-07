import {Component} from '@angular/core';
import {BookModel} from "./book.model";
import {of} from "rxjs";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books$ = of<BookModel[]>( [
    {
      "id": 0,
      "author": {
        "firstName": "Douglas",
        "lastName": "Crockford"
      },
      "details": {
        "pages": 11,
        "format": "A5"
      },
      "title": "JavaScript. The Good Parts"
    },
    {
      "id": 1,
      "author": {
        "firstName": "Tom",
        "lastName": "Hombergs"
      },
      "details": {
        "pages": 11,
        "format": "A6"
      },
      "title": "Get Yor Hands Dirty on Clean Architecture"
    },
    {
      "id": 2,
      "author": {
        "firstName": "Robert",
        "lastName": "C. Martin"
      },
      "details": {
        "pages": 11,
        "format": "A4"
      },
      "title": "Clean Code"
    },
    {
      "id": 3,
      "author": {
        "firstName": "Vinit",
        "lastName": "Nayak"
      },
      "details": {
        "pages": 11,
        "format": "A5"
      },
      "title": "Copying and Pasting from Stack Overflow"
    }
  ])

  bookSelected(book: BookModel) {
    alert(book);
  }
}
