import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostListComponent } from '../post-list/post-list.component';
import { log } from 'util';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
@Input() p :Post;
  constructor() { 
  }

  ngOnInit() {
  }
  savePost(){
    if(PostListComponent.prototype.posts!= null){
      PostListComponent.prototype.posts.push(this.p);
      console.log ( "etat 2");
    }
    else {
      console.log ( "etat 1");
      PostListComponent.prototype.posts =[this.p];
    }
    PostListComponent.apply(PostListComponent.prototype.posts);
this.p = new Post();
  }
  dontloveit(){
    this.p.loveIts--;
  }
  loveit(){
    this.p.loveIts++;
  }
}
