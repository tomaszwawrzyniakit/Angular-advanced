import {NgModule} from '@angular/core';

import {BookDetailsComponent} from './book-details.component';
import {SharedModule} from "../../shared/shared.module";
import { BookDetailsNavigatorComponent } from './components/book-details-navigator/book-details-navigator.component';

@NgModule({
  declarations: [
    BookDetailsComponent,
    BookDetailsNavigatorComponent,
  ],
  exports: [BookDetailsComponent],
  imports: [SharedModule],
  providers: []
})
export class BookDetailsModule {
}
