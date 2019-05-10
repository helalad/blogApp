import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post-service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
@Input() index :number;
p:Post;
  constructor(private servicepost :PostService) { 
  }

  ngOnInit() {
    this.p = this.servicepost.gePostByIndex(this.index);
  }
 
  dontloveit(){
   
   this.servicepost.dontloveIt(this.index);
  }
  loveit(){
    this.servicepost.loveit(this.index);
  }
  deletePost(){
    this.servicepost.deletePost(this.index);
  }
}
