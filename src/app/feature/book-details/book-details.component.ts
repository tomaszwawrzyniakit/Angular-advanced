import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";

import {BookModel} from "../books/book.model";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  book$: Observable<BookModel>  = this.activatedRoute.data.pipe(map(data => data['book']!));

  constructor(private activatedRoute: ActivatedRoute) {
  }

}
