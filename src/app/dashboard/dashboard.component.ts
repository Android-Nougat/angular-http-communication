import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import { DataService } from 'app/core/data.service';
import { BookTrackerError } from 'app/models/bookTrackerError';

import { ActivatedRoute } from '@angular/router';
import { VoterService } from 'app/service/voter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private dataService: DataService,
    private title: Title,
    private voterService : VoterService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const data: Book[] | BookTrackerError = this.route.snapshot.data['resolvedBooks'];
    if (data instanceof BookTrackerError) {
      console.log('error ' + data.message);
    } else {
      this.allBooks = data;
    }

    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.title.setTitle(`Book Tracker`);
  }

  deleteBook(bookID: number): void {
    this.dataService.deleteBook(bookID).subscribe(
      (data: void) => {
        const index = this.allBooks.findIndex(book => book.bookID === bookID);
        this.allBooks.splice(index, 1);
      },
      (err: any) => console.log(err)
    )
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

  toggleVote(book: Book) {
    this.voterService.modifyVoter(book);
  }

  hasVoted(book: Book) {
    return this.voterService.checkVoter(book);
  }
}
