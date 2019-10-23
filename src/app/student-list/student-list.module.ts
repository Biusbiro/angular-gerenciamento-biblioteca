import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list.component';
import { StudentListRoutingModule } from './student-list.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    imports: [
        CommonModule,
        StudentListRoutingModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatChipsModule
    ],
    exports: [],
    declarations: [
        StudentListComponent,
        StudentFormComponent
    ],
    providers: []
})

export class StudentListModule {}
