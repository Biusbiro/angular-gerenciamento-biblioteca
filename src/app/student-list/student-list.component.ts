import { MatSidenav } from '@angular/material';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StudentListService } from './student-list.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentListService: StudentListService;
  @Input() students: any[];
  @ViewChild('formContainer', {static: false}) sidenavForm: MatSidenav;

  constructor() {
    this.studentListService = new StudentListService();
  }

  ngOnInit() {
    this.students = this.studentListService.getAll();
  }

  openSidenav() {
    this.sidenavForm.open();
  }

  closeSidenav() {
    this.sidenavForm.close();
  }
}
