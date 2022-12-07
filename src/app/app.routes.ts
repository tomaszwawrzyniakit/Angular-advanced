import {Routes} from "@angular/router";

import {BooksComponent} from "./feature/books/books.component";
import {BookDetailsComponent} from "./feature/book-details/book-details.component";
import {BookEditComponent} from "./feature/book-edit/book-edit.component";
import {NotFoundComponent} from "./feature/not-found/not-found.component";
import {NotSavedGuard} from "./feature/book-edit/not-saved.guard";
import {BookResolver} from "./feature/book-details/book.resolver";

export const routes: Routes = [
  {path: 'book-list', component: BooksComponent},
  {path: 'book/new', component: BookEditComponent, canDeactivate: [NotSavedGuard]},
  {path: 'book/:id', component: BookDetailsComponent, resolve:{ book: BookResolver}},
  {path: 'book/:id/edit', component: BookEditComponent, canDeactivate: [NotSavedGuard], resolve:{ book: BookResolver}},
  {path: '', redirectTo: '/book-list', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found',}
];
