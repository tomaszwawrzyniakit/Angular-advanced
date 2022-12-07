import {NgModule} from '@angular/core';

import {BooksComponent} from "./books.component";
import {SharedModule} from "../../shared/shared.module";
import { BookTableComponent } from './components/book-table/book-table.component';
import { BookFilterPanelComponent } from './components/book-filter-panel/book-filter-panel.component';
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    BooksComponent,
    BookTableComponent,
    BookFilterPanelComponent,
  ],
  exports: [BooksComponent],
  imports: [SharedModule, CoreModule],
})
export class BooksModule {
}
