import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookRestService} from "../../core/book-rest.service";
import {map, Observable, switchMap, tap} from "rxjs";
import {BookModel} from "../books/book.model";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  book$: Observable<BookModel>;
  bookId$: Observable<string>;


  constructor(private activatedRoute: ActivatedRoute, private bookRestService: BookRestService) {

    this.bookId$ = this.activatedRoute.paramMap.pipe(map(paramMap => paramMap.get('id')!));

    this.book$ = this.bookId$.pipe(switchMap((id) => this.bookRestService.findById(id)),
      tap({
        error: error => alert("Error!")
      }))


  }

}
