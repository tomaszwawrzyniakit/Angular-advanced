import {Routes} from "@angular/router";

import {BooksComponent} from "./feature/books/books.component";
import {BookDetailsComponent} from "./feature/book-details/book-details.component";
import {BookEditComponent} from "./feature/book-edit/book-edit.component";
import {NotFoundComponent} from "./feature/not-found/not-found.component";

export const routes: Routes = [
  {path: 'book-list', component: BooksComponent},
  {path: 'book/new', component: BookEditComponent},
  {path: 'book/:id', component: BookDetailsComponent},
  {path: 'book/:id/edit', component: BookEditComponent},
  {path: '', redirectTo: '/book-list', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
