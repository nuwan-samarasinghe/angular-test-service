import {Component} from '@angular/core';
import {BookService} from './test-get-service/book-service';
import {BookPostServiceService} from './test-post-service/book-post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService, BookPostServiceService]
})
export class AppComponent {
  title = 'app';
}
