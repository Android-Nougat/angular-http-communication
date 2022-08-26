import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Book } from "app/models/book";

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: [
    `
    em{float:right;color:red}
    `
  ]
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  title: FormControl;
  author: FormControl;
  publicationYear: FormControl;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = new FormControl('', Validators.required);
    this.author = new FormControl('', Validators.required);
    this.publicationYear = new FormControl(0, [Validators.required, Validators.pattern('[0-9]*')]);
    this.bookForm = new FormGroup({
      title: this.title,
      publicationYear: this.publicationYear,
      author: this.author
    })
  }

  saveBook(formValues: any): void {
    const newBook: Book = <Book>formValues;
    newBook.bookID = 0;
    console.log(newBook);

    this.dataService.addBook(newBook).subscribe(
      (data: Book) => console.log(data),
      (err: any) => console.log(err)
    )
  }

}
