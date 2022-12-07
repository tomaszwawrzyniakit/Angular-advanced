import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {delay, mergeMap, Observable, of, retryWhen, throwError} from 'rxjs';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  retries = 3;
  delayTime = 1000;
  penalty = 500;


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const handledRequest = next.handle(request);


    let currRetries = 0;
    if (request.method === 'GET') {
      return handledRequest.pipe(
        retryWhen((error: Observable<HttpErrorResponse
          >) =>
            error.pipe(
              mergeMap((error: HttpErrorResponse) => {
                if (this.retries > currRetries) {
                  const extraTime = this.delayTime + this.penalty * currRetries;
                  ++currRetries;
                  return of(error).pipe(delay(extraTime));
                }
                return throwError(() => error);
              }),
            ),
        ),
      )
    }
    return handledRequest
  }
}
