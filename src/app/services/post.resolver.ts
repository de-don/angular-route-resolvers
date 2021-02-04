import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    const id = route.paramMap.get('id');
    return this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id).pipe(
      delay(2000),
    );
  }
}
