import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first Post\'s content'},
  //   {title: 'Second Post', content: 'This is the second Post\'s content'},
  //   {title: 'Third Post', content: 'This is the third Post\'s content'},
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPost();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
