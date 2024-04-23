import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isLoggedIn = this.authService.isLoggedIn;
    const isApiUrl = req.url.startsWith(environment.serverURL);
    if (isLoggedIn && isApiUrl) {
      const token = this.authService.getUserToken();
      req = req.clone({
        setHeaders: { 'x-auth-token': `${token}` },
      });
    }
    return next.handle(req);
  }
  
}