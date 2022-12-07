import {NgModule} from '@angular/core';
import {BooksModule} from "./books/books.module";
import {BookEditModule} from "./book-edit/book-edit.module";
import {BookDetailsModule} from "./book-details/book-details.module";
import {CoreModule} from "../core/core.module";


const features = [BooksModule, BookEditModule, BookDetailsModule]

@NgModule({
  imports: [...features, CoreModule],
  exports: [...features]
})
export class FeaturesModule {
}
