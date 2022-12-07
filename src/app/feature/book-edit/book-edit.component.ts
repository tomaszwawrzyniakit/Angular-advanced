import {Component, OnDestroy} from '@angular/core';
import {map, Subscription} from "rxjs";

import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {mojMaxLength} from "../../shared/forms/validators";
import {BookModel, ControlsOf} from "../books/book.model";





@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnDestroy {

  protected bookForm = new FormGroup<ControlsOf<BookModel>>(
    {
      id: new FormControl(-1, {nonNullable: true}),
      author: new FormGroup({
        firstName: new FormControl('werwer', {nonNullable: true, validators: [Validators.required, mojMaxLength(20)]}),
        lastName: new FormControl('werwer', {nonNullable: true, validators: [Validators.required]}),
      }),
      details: new FormGroup({
        pages: new FormControl(-1, {nonNullable: true, validators: [Validators.required, Validators.max(1000)]}),
        format: new FormControl('werwer', {nonNullable: true, validators: [Validators.required]}),
      }),
      title: new FormControl('werwer', {nonNullable: true, validators: [Validators.required, mojMaxLength(10)]}),
      description: new FormControl('werwer', {nonNullable: true}),
    });


  private bookSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.bookSubscription = this.activatedRoute.data.pipe(map(data => data['book']!))
      .subscribe(book => {
        this.bookForm.setValue(book);
        this.bookForm.patchValue(book);
        this.bookForm.reset({title: "test"});
      });
  }

  isDirty() {
    return this.bookForm.dirty;
  }

  ngOnDestroy() {
    if (this.bookSubscription) {
      this.bookSubscription.unsubscribe();
    }
  }
}
