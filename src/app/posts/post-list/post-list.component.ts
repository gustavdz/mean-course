import {Component, Input} from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'This is the first Post\'s content'},
  //   {title: 'Second Post', content: 'This is the second Post\'s content'},
  //   {title: 'Third Post', content: 'This is the third Post\'s content'},
  // ];
  @Input() posts: Post[] = [];
}
