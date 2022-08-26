import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpContextToken } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpCacheService } from "./http-cache.service";

export const CACHABLE = new HttpContextToken(() => true);

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    constructor(private cacheService: HttpCacheService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(!req.context.get(CACHABLE)){
            return next.handle(req);
        }

        if (req.method !== 'GET') {
            console.log(`Invalidating cache ... ${req} - ${req.url}`);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }
        const cachedData: HttpResponse<any> = this.cacheService.get(req.url);

        if (cachedData) {
            console.log(`Obtaining from the cache ${req} - ${req.url}`);
            return of(cachedData);
        }

        return next.handle(req).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    console.log('Adding item to the cache');
                    this.cacheService.put(req.url, event)
                }
            })
        )
    }

}