import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {BookRestService} from "../core/book-rest.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[CommonModule]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule,
      providers: [BookRestService],
    }
  }
}
