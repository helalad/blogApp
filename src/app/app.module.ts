import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule } from 'angular-bootstrap-md';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { PostService } from './services/post-service';

const routes: Routes = [
  { path: 'newpost', component: NewPostComponent },
  { path: 'posts', component: PostListComponent },
  { path: '', component: PostListComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ],
  schemas: [NO_ERRORS_SCHEMA ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
