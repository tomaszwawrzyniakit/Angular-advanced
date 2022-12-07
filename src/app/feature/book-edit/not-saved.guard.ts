import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate} from '@angular/router';

import {BookEditComponent} from "./book-edit.component";

@Injectable({
  providedIn: 'root'
})
export class NotSavedGuard implements CanDeactivate<BookEditComponent> {
  canDeactivate(component: BookEditComponent, currentRoute: ActivatedRouteSnapshot):  boolean {
    return component.isDirty() ? confirm("Are you sure?") : true;
  }

}
