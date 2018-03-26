import {Component, OnInit} from '@angular/core';
import {BookService} from './book-service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {

  public books = [];

  constructor(private _bookService: BookService) {
  }

  ngOnInit(): void {
    this._bookService.getBooks().subscribe(resBookData => this.books = resBookData);
  }
}


