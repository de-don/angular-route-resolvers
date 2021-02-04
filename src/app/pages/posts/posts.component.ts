import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  public posts$ = this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }
}
