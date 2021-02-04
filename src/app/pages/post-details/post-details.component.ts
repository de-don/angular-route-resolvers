import {Component} from '@angular/core';
import {pluck} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  public post$ = this.activatedRoute.data.pipe(
    pluck('post'),
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }
}
