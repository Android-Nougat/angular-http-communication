import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import { DataService } from 'app/core/data.service';
import { BookTrackerError } from 'app/models/bookTrackerError';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/service/auth.service';

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
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    let data: Book[] | BookTrackerError = this.route.snapshot.data['resolvedBooks'];
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
        let index = this.allBooks.findIndex(book => book.bookID === bookID);
        this.allBooks.splice(index, 1);
      },
      (err: any) => console.log(err)
    )
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

  toggleVote(book: Book) {
    if (this.hasVoted) {
      let index = book.voters.findIndex(voter => voter.readerID === this.authService.reader.readerID);
      book.voters.splice(index,1);
    }else{
      book.voters.push(this.authService.reader)
    }
  }

  hasVoted(book: Book) {
    if (this.authService.isLoggedIn()) {
      // book.voters.includes(this)
      let retrievedVoter = book.voters.filter(voter => this.authService.reader.readerID === voter.readerID)[0];
      if (retrievedVoter)
        return true;
    }
    return false;
  }
}
