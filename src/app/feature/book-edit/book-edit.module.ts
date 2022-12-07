import {NgModule} from '@angular/core';

import {BookEditComponent} from "./book-edit.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    BookEditComponent,
  ],
  exports: [BookEditComponent],
  imports: [SharedModule],
  providers: []
})
export class BookEditModule {
}
