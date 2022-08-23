import { DataService } from "./data.service"

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { Book } from "app/models/book";
import { BookTrackerError } from "app/models/bookTrackerError";

describe('Http testing', () => {

    let dataService: DataService;
    let httpTestController: HttpTestingController;

    let testBooks: Book[] = [
        { bookID: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', publicationYear: 1953 },
        { bookID: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne', publicationYear: 1926 },
        { bookID: 3, title: 'The Hobbit', author: 'J. R. R. Tolkien', publicationYear: 1937 }
    ];

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataService]
        })

        dataService = TestBed.inject(DataService);
        httpTestController = TestBed.inject(HttpTestingController);
    })

    afterEach(() => {
        httpTestController.verify();
    })

    it('Get All books', () => {
        dataService.getAllBooks().subscribe(
            (data: Book[] | BookTrackerError) => {
                expect((<Book[]>data).length).toBe(3);
            }
        )

        let booksRequest: TestRequest = httpTestController.expectOne('/api/books');
        expect(booksRequest.request.method).toEqual('GET');

        booksRequest.flush(testBooks);
    });

    it('test 2', () => {
        dataService.getAllBooks().subscribe(
            (data: Book[] | BookTrackerError) => fail('This should have been a fail'),
            (err: BookTrackerError) => {
                expect(err.errorNumber).toBe(100);
                expect(err.friendlyMessage).toBe('An error occurred. Please try again.');
            }
        )

        let booksRequest: TestRequest = httpTestController.expectOne('/api/books');

        booksRequest.flush('error', {
            status: 500,
            statusText: 'Server error'
        })
    })
})