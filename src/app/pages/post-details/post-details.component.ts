import {Component} from '@angular/core';
import {pluck, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  public updateDate?: Date;

  public post$ = this.activatedRoute.data.pipe(
    pluck('post'),
    tap(() => this.updateDate = new Date()),
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }
}
