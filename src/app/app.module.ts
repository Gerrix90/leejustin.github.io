import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BloggerService } from './services/blogger.service';
import { BlogListComponent } from './blog/list.component';
import { BlogPostComponent } from './blog/post.component';
import { NotFoundComponent } from './404.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BlogListComponent,
    BlogPostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    BloggerService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
