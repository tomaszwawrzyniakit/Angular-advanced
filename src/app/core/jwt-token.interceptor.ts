import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = request.headers.set("Authentication", "Bearer XYZ");
    const newRequest = request.clone({headers});
    return next.handle(newRequest);
  }
}
