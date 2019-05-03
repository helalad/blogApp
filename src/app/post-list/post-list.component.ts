import { Component, OnInit } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  p: Post  ;
  posts: Post [] =[];
  constructor() { 
   
  }

  ngOnInit() {
    this.p= new Post('','');
    this.posts = [
      new Post('Post 1','content .....')
    , new Post('Post 2','content .....')
    ];
    
  }

  savePost(){
      this.posts.push(this.p);
    this.p = new Post('','');
  }

}
