import { StudentListService } from './../student-list.service';
import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../book-list/book-list.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  id: string;
  books: any[];
  bookListService: BookListService;
  studentListService: StudentListService;
  student: any;
  subscribe: Subscription;

  constructor(private route: ActivatedRoute) {
    this.bookListService = new BookListService();
    this.studentListService = new StudentListService();
  }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    this.books = this.bookListService.getAll();
    this.student = this.studentListService.getById(this.id);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
