import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  private errorSub: Subscription;

  constructor(private readonly service: PostsService) {}

  ngOnInit() {
    this.errorSub = this.service.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.service.createPosts(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;

    this.service.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.service.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
