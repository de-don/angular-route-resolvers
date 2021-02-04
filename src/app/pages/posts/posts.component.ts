import {Component} from '@angular/core';
import {pluck} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  public posts$ = this.activatedRoute.data.pipe(
    pluck('posts'),
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }
}
