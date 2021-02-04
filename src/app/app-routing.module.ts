import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './pages/posts/posts.component';
import {PostDetailsComponent} from './pages/post-details/post-details.component';
import {PostResolver} from './services/post.resolver';
import {PostsListResolver} from './services/posts-list.resolver';
import {PostNotFoundComponent} from './pages/post-not-found/post-not-found.component';

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
    },
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'not-found',
    component: PostNotFoundComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
