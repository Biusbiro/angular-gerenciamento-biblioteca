import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = [
    {key: '1', title: 'Working effectively with legacy code',            author: 'Michael C. Feathers',                                       place: 'Prateleira 1'},
    {key: '2', title: 'Design Patterns',                                 author: 'Ralph Johnson, Erich Gamma, John Vlissides e Richard Helm', place: 'Prateleira 3'},
    {key: '3', title: 'Clean Code',                                      author: 'Robert C. Martin.',                                         place: 'Prateleira 2'},
    {key: '4', title: 'Java Concurrency in Practice',                    author: 'Brian Goetz',                                               place: 'Prateleira 1'},
    {key: '5', title: 'Domain Driven Design',                            author: 'Eric Evans',                                                place: 'Prateleira 1'},
    {key: '6', title: 'JavaScript',                                      author: 'Douglas Crockford',                                         place: 'Prateleira 2'},
    {key: '7', title: 'Patterns of Enterprise Application Architecture', author: 'Martin Fowler',                                             place: 'Prateleira 1'},
    {key: '8', title: 'Code complete',                                   author: 'Steve McConnell ',                                          place: 'Prateleira 2'},
    {key: '9', title: 'Refactoring',                                     author: 'Martin Fowler',                                             place: 'Prateleira 1'},
    {key: '10', title: 'Head First Design Patterns',                      author: 'Eric Freeman, Elisabeth Freeman, Kathy Sierra, Bert Bates', place: 'Prateleira 3'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
