import { Component, OnInit } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  p: Post  ;
  posts: Post [] ;
  constructor() { 
   
  }

  ngOnInit() {
    this.p= new Post();
    this.p.title ="test";
    this.p.content ="content";
    this.posts = [this.p];
    
  }

}
