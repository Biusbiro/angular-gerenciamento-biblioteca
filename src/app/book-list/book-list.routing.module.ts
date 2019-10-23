import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const booksRoutes = [
    {path: 'books', component: BookListComponent, children: [
        {path: 'new', component: BookFormComponent},
        {path: ':id', component: BookFormComponent}
    ]},
];

@NgModule({
 imports: [RouterModule.forChild(booksRoutes)],
 exports: [RouterModule]
})

export class BookListRoutingModule {}
