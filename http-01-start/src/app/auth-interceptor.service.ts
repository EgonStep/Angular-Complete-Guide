import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request is on its way');

    // Change the request and forward a new one
    const modifiedRequest = req.clone(
        {
          headers: req.headers.append('Auth', 'xyz')
        }
    );

    // next.handle so the request can continue
    return next.handle(modifiedRequest);

    // .pipe(
    //   tap(event => { // Can interact with the response
    //     if (event.type === HttpEventType.Response) {
    //       console.log('Response arrived, body data: ');
    //       console.log(event.body);
    //     }
    //   })
    // );
  }
}
