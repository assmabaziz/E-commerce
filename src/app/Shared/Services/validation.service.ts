import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable()

export class ValidationService {


static mustMatch (controlName: string, matchingControlName: string) : ValidatorFn {
  return(abstractControl: AbstractControl) : ValidationErrors | null => {
    const control = abstractControl.get(controlName)
    const matchingControl = abstractControl.get(matchingControlName)
    if(!control || !matchingControl) {
      return null;
    }
    if(matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return null
    }
    const isMatching = control.value === matchingControl.value;
    const error = {mustMatch : true}
    matchingControl.setErrors(isMatching ? null : error)
    return isMatching ? null : error
  }
}














}
