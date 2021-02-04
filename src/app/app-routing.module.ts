import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './pages/posts/posts.component';
import {PostDetailsComponent} from './pages/post-details/post-details.component';
import {PostResolver} from './services/post.resolver';
import {PostsListResolver} from './services/posts-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      posts: PostsListResolver,
    }
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent,
    resolve: {
      post: PostResolver,
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
