import { BookListService } from './../book-list.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  id: string;
  bookListService: BookListService;
  book: any;
  formIsClose: any;

  @Output() closeForm = new EventEmitter();

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.bookListService =  new BookListService();
  }

  btnCloseClicked() {
    console.log(this);
    this.formIsClose = !this.formIsClose;
    this.closeForm.emit( this.formIsClose );
  }

  ngOnInit() {
    this.formIsClose = false;
    this.book = this.bookListService.getById(this.id);
  }
}
