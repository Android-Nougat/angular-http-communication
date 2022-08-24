import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable, pipe, throwError } from 'rxjs'
import { map, tap, catchError } from 'rxjs/operators';
import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { BookTrackerError } from 'app/models/bookTrackerError';

import { OldBook } from '../models/oldBook';
import { CACHABLE } from './cache.interceptor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Observable<Book[] | BookTrackerError> {
    console.log("getting books")
    return this.http.get<Book[]>('/api/books',{
      context : new HttpContext().set(CACHABLE,false)
    }).
    pipe(
      catchError(err=>this.handleHttpError(err))
    )
    ;
  }

  handleHttpError(err :HttpErrorResponse):Observable<BookTrackerError>{
    let tracker = new BookTrackerError();
    tracker.errorNumber = 100;
    tracker.friendlyMessage = 'An error occured while receiving the data',
    tracker.message = err.message
    
    return throwError(tracker);
  }

  getBookById(id: number): Observable<Book> {
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'my-token'
    });

    return this.http.get<Book>(`/api/books/${id}`, { headers: getHeaders })
  }

  getOldBooks(id: number): Observable<OldBook> {
    return this.http.get<Book>(`/api/books/${id}`).pipe(
      map((data) => <OldBook>{
        bookTitle: data.title,
        year: data.publicationYear
      }
      ),
      tap((oldBook) => console.log(oldBook))
    )
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`/api/books/`, newBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateBook(updatedBook: Book): Observable<void> {
    return this.http.put<void>(`/api/books/${updatedBook.bookID}`, updatedBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`/api/books/${id}`)
  }
}
