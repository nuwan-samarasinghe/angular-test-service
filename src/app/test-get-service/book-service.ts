import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private _http: Http) {
  }

  getBooks() {
    return this._http.get('http://localhost:3000/books').map((response: Response) => response.json());
  }
}
