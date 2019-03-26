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
  title = 'Wiki Search';
  // readonly ROOT_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=japan&origin=*&format=json';
  readonly ROOT_URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=Harry Potter&origin=*&callback=JSON_CALLBACK';
  // https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=japan"


  posts: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts(){
    this.posts = this.http.get(this.ROOT_URL)
  }
}


// this.httpClient.post(this.apiURL + '/login', user, {headers:reqHeader, responseType: 'text'});
