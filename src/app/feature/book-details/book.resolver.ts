import {Injectable} from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {catchError, Observable, throwError} from 'rxjs';
import {BookModel} from "../books/book.model";
import {BookRestService} from "../../core/book-rest.service";

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<BookModel> {
  constructor(private bookRestService: BookRestService, private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<BookModel> {
    const bookId = route.paramMap.get('id')!;

    return this.bookRestService.findById(bookId)
      .pipe(
        catchError((error) => {
            this.router.navigate(['not-found'])
            return throwError(error);
          }
        ));
  }
}
