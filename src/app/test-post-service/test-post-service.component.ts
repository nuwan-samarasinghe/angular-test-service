import {Component, OnInit} from '@angular/core';
import {BookPostServiceService} from './book-post-service.service';

@Component({
  selector: 'app-test-post-service',
  templateUrl: './test-post-service.component.html',
  styleUrls: ['./test-post-service.component.css']
})
export class TestPostServiceComponent implements OnInit {

  inputData: any;

  constructor(private _bookPostService: BookPostServiceService) {
  }

  onSubmit(_val: any) {
    this.inputData = _val;
    this._bookPostService.putBooks(this.inputData).subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit() {

  }

}
