import {Component, OnDestroy} from '@angular/core';
import {map, Subscription} from "rxjs";

import {ActivatedRoute} from "@angular/router";
import {BookModel} from "../books/book.model";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {mojMaxLength} from "../../shared/forms/validators";


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnDestroy {

  protected bookForm = new FormGroup(
    {
      id: new FormControl(''),
      author: new FormGroup({
        firstName: new FormControl('', {validators: [Validators.required, mojMaxLength(20)]}),
        lastName: new FormControl('', {validators: [Validators.required]}),
      }),
      details: new FormGroup({
        pages: new FormControl('', {validators: [Validators.required, Validators.max(1000)]}),
        format: new FormControl('', {validators: [Validators.required]}),
      }),
      title: new FormControl('', {validators: [Validators.required, mojMaxLength(10)]}),
      description: new FormControl(''),
    });


  protected book?: BookModel;
  private dirty = false;
  private bookSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
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
