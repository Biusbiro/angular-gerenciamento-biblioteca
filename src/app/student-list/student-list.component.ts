import { Component, OnInit, Input } from '@angular/core';
import { StudentListService } from './student-list.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentListService: StudentListService;
  @Input() students: any[];

  constructor() {
    this.studentListService = new StudentListService();
  }

  ngOnInit() {
    this.students = this.studentListService.getAll();
  }
}
