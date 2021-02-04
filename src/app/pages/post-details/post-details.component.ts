import {Component} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  public post$ = this.activatedRoute.paramMap.pipe(
    switchMap(paramsMap => {
      const id = paramsMap.get('id');
      return this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
    }),
  );

  constructor(
    private readonly httpClient: HttpClient,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }
}
