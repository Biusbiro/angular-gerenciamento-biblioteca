import { MatButtonModule } from '@angular/material/button';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list.component';
import { BookListRoutingModule } from './book-list.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        BookListRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [],
    declarations: [
        BookListComponent,
        BookFormComponent
    ],
    providers: []
})

export class BooksListModule {}
