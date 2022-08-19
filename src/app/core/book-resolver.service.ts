import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Book } from "app/models/book";
import { BookTrackerError } from "app/models/bookTrackerError";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { DataService } from "./data.service";


@Injectable({
    providedIn: 'root'
})

export class BookResolverService implements Resolve<Book[] | BookTrackerError>{

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book[] | BookTrackerError | Observable<Book[] | BookTrackerError> | Promise<Book[] | BookTrackerError> {
        return this.dataService.getAllBooks()
            .pipe(
                catchError(err => of(err))
            )
    }
}