import {NgModule} from '@angular/core';

import {BookEditComponent} from "./book-edit.component";


@NgModule({
  declarations: [
    BookEditComponent,
  ],
  exports: [BookEditComponent],
  imports: [],
  providers: []
})
export class BookEditModule {
}
