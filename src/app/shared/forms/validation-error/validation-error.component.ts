import {Component, HostBinding, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss'],
  // host:{
  //   class: 'invalid-feedback'
  // }
})
export class ValidationErrorComponent {

  @HostBinding('class.invalid-feedback')
  hasIsInvalidClass = true;

  @Input('for')
  formControl!: AbstractControl
}
