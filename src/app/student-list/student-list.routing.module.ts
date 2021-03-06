import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const studentsRoutes = [
    {path: 'students', component: StudentListComponent, children: [
        {path: 'new', component: StudentFormComponent},
        {path: ':id', component: StudentFormComponent}
    ]},
];

@NgModule({
 imports: [RouterModule.forChild(studentsRoutes)],
 exports: [RouterModule]
})

export class StudentListRoutingModule {}
