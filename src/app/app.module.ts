import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PostsComponent} from './pages/posts/posts.component';
import {PostDetailsComponent} from './pages/post-details/post-details.component';
import {PostCardComponent} from './components/post-card/post-card.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
