import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikipedia-viewer';

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts(){
    let params = new HttpParams().set('userId', '1');
    this.posts = this.http.get(this.ROOT_URL + '/posts', { params })

  }
}
