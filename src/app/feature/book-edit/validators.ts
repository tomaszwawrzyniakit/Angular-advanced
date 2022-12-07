import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const mojMaxLength = function (max: number): ValidatorFn {
  return function (control: AbstractControl): ValidationErrors | null {
    return control.value?.length > max ? {mojMaxLength: {actualLength: control.value?.length}} : null;
  }

}
