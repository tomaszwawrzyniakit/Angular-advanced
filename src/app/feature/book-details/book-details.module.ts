import {NgModule} from '@angular/core';

import {BookDetailsComponent} from './book-details.component';

@NgModule({
  declarations: [
    BookDetailsComponent,
  ],
  exports: [BookDetailsComponent],
  imports: [],
  providers: []
})
export class BookDetailsModule {
}
