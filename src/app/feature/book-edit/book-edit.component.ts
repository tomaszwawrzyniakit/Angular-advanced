import {Component, OnDestroy} from '@angular/core';
import {filter, map, Subscription, switchMap} from "rxjs";

import {ActivatedRoute} from "@angular/router";
import {BookRestService} from "../../core/book-rest.service";
import {BookModel} from "../books/book.model";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnDestroy {

  protected book?: BookModel;
  private bookSubscription: Subscription;

  constructor(private bookRest: BookRestService, private activatedRoute: ActivatedRoute) {
    this.bookSubscription = this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      filter((id): id is string => !!id),
      switchMap(id => this.bookRest.findById(id))
    ).subscribe(book => (this.book = book))

  }


  ngOnDestroy() {
    if (this.bookSubscription) {
      this.bookSubscription.unsubscribe();
    }
  }
}
