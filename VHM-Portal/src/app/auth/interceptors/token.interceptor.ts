import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ErrorHandler } from 'src/app/shared/helpers/error-handler';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private notification: NotificationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();
    let text: string = '';
  
    if (token) {
      request = request.clone({
        setHeaders: {
          'Accept-Language': 'es-ES',
          'Authorization': `Bearer ${token}`
        }
      })
    }

    return next.handle(request).pipe(
    
      catchError((error: { error: any }) => {
        if (error.error) {
          text = ErrorHandler.processErrorModel(error.error.errors)!
          return throwError(() =>  this.notification.showError(text))
        }

        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {  
            this.auth.logout();
            this.notification.showError("Token expired");            
          }
        }
        return throwError(() => new Error("An error ocurred"));
      })
    );
  }
}
