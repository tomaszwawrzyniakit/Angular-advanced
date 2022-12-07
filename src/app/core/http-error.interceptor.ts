import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  cache = {};

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(
        (httpError: HttpErrorResponse) => {

          if (httpError.error instanceof Error) {
            console.log('Client side error');
          } else {
            console.log('Backend side error', httpError.status);
          }
          // return EMPTY;
          return throwError(httpError);
          // return of(this.cache[request.url]);
        }
      )
    );
  }
}
