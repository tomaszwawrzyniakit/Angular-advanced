import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRestService} from "../core/book-rest.service";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ValidationErrorComponent } from './validation-error/validation-error.component';


@NgModule({
  declarations: [
    ValidationErrorComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, ValidationErrorComponent]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [BookRestService],
    }
  }
}
