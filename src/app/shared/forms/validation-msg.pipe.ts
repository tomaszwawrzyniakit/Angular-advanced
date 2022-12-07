import {Pipe, PipeTransform} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Pipe({
  name: 'validationMsg'
})
export class ValidationMsgPipe implements PipeTransform {

  transform(errors?: ValidationErrors | null): unknown {
    if (errors) {

      const errorKey: string = Object.keys(errors)[0];
      return validationMessages[errorKey] || 'This field is invalid';

    }
    return null;
  }

}


export const validationMessages: { [key: string]: string } = {
  required: 'This field is required',
  tooShort: 'This field is too short',
  email: 'The email address is invalid',
  postCode: 'The post code is invalid',
  pattern: 'The format is incorrect',
  telNoOrEmailRequired: 'Only email or phone is requeired',
  mojMaxLength: 'Too long'
};
