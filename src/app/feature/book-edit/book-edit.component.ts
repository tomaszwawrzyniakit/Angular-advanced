import {Component, OnDestroy} from '@angular/core';
import {map, Subscription} from "rxjs";

import {ActivatedRoute} from "@angular/router";
import {BookModel} from "../books/book.model";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnDestroy {

  protected book?: BookModel;
  private dirty = false;
  private bookSubscription: Subscription;

  constructor( private activatedRoute: ActivatedRoute) {
    this.bookSubscription = this.activatedRoute.data.pipe(map(data => data['book']!)).subscribe(book => (this.book = book))

  }

  setDirty() {
    this.dirty = true;
  }

  isDirty() {
    return this.dirty;
  }

  ngOnDestroy() {
    if (this.bookSubscription) {
      this.bookSubscription.unsubscribe();
    }
  }
}
