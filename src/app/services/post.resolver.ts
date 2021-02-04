import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {from, NEVER, Observable, of} from 'rxjs';
import {Post} from '../models/post';
import {delay, switchMap, switchMapTo} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
  ) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    const id = route.paramMap.get('id');

    return this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id).pipe(
      delay(2000),
      switchMap((post) => {
        if (id === '2') {
          return from(this.router.navigate(['/not-found'])).pipe(
            switchMapTo(NEVER),
          );
        }
        return of(post);
      })
    );
  }
}
