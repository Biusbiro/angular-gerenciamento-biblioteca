import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BookListService } from './book-list.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookListService: BookListService;
  @Input() books: any[];
  @ViewChild('formContainer', {static: false}) sidenavForm: MatSidenav;

  constructor() {
    this.bookListService = new BookListService();
  }

  ngOnInit() {
    this.books = this.bookListService.getAll();
  }

  openSidenav() {
    this.sidenavForm.open();
  }

  closeSidenav() {
    this.sidenavForm.close();
  }

}
