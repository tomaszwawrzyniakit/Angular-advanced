import {NgModule} from '@angular/core';
import {BooksModule} from "./books/books.module";
import {BookEditModule} from "./book-edit/book-edit.module";
import {BookDetailsModule} from "./book-details/book-details.module";


const features = [BooksModule, BookEditModule, BookDetailsModule]

@NgModule({
  imports: [...features],
  exports: [...features]
})
export class FeaturesModule {
}
