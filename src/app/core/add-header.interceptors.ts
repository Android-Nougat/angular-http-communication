import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpContextToken } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export const CONTEXT_TYPE = new HttpContextToken(() => 'application/json');

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`AddHeaderInterceptor - ${req.url}`);

        const jsonReq: HttpRequest<any> = req.clone({
            setHeaders: {
                'Content-Type': req.context.get(CONTEXT_TYPE)
            }
        });

        return next.handle(jsonReq);
    }
}