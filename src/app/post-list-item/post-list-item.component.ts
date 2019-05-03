import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

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
 
  dontloveit(){
    this.p.loveIts--;
    console.log("nb l"+this.p.loveIts);
  }
  loveit(){
    this.p.loveIts++;
    console.log("nb l"+this.p.loveIts);
  }
}
