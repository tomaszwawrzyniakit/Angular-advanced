import {NgModule} from '@angular/core';

import {BookEditComponent} from "./book-edit.component";
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    BookEditComponent,
  ],
  exports: [BookEditComponent],
  imports: [CoreModule],
  providers: []
})
export class BookEditModule {
}
