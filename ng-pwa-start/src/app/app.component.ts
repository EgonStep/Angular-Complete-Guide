import { Component, OnInit } from '@angular/core';
import { Post } from './post/post.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  // Service's Workers Config is on the file -> ngsw-config.json

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts') // Dummy API
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }
}
