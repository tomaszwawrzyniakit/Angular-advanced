import {NgModule} from '@angular/core';

import {BooksComponent} from "./books.component";


@NgModule({
  declarations: [
    BooksComponent,
  ],
  exports:[BooksComponent],
  imports: [],
  providers: []
})
export class BooksModule {
}
