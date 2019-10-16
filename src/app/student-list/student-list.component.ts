import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students = [
    {key: '0', name: 'James A. Vincent',     educationalInstitution: 'Harvard University',                    pendencies: true},
    {key: '1', name: 'John B. Henry',        educationalInstitution: 'Harvard University',                    pendencies: false},
    {key: '2', name: 'James R. Keaton',      educationalInstitution: 'Stanford University',                   pendencies: false},
    {key: '3', name: 'Thomas E. Barnes',     educationalInstitution: 'Stanford University',                   pendencies: false},
    {key: '4', name: 'Matthew T. Vasquez',   educationalInstitution: 'Yale University',                       pendencies: false},
    {key: '5', name: 'Martin C. Reeves',     educationalInstitution: 'Yale University',                       pendencies: true},
    {key: '6', name: 'Ann R. Roos',          educationalInstitution: 'Princeton University',                  pendencies: false},
    {key: '7', name: 'Christine H. Behrens', educationalInstitution: 'Princeton University',                  pendencies: false},
    {key: '8', name: 'Robert E. Martinez',   educationalInstitution: 'Massachusetts Institute of Technology', pendencies: false},
    {key: '9', name: 'Loren C. Webb',        educationalInstitution: 'Massachusetts Institute of Technology', pendencies: true},
  ];

  constructor() { }

  ngOnInit() {
  }

}
