import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-list/student-form/student-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'books/:id', component: BookFormComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'students/:id', component: StudentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
