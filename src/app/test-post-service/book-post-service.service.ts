import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookPostServiceService {

  constructor(private _http: Http) {
  }

  putBooks(_value: any) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    console.log(_value);
    console.log(headers);
    return this._http.post('http://localhost:3000/books', _value, options).map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: any) {
    console.log(res);
    return res.json() || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
