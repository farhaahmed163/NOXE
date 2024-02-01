import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newRequest = request.clone({
      url: request.url.replace(
        'api_key=',
        'api_key=c95de11ec012ef476f2014e59179dcd9&language=en-US'
      ),
    });
    return next.handle(newRequest);
  }
}
