import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit ,OnDestroy {
 
  posts:  any[];
  postSubscription :Subscription;
  constructor(private  postServices :PostService ) { 
   
  }

  ngOnInit() {
   this.postSubscription= this.postServices.subjectPost.subscribe(
     (posts : Post[]) =>{
this.posts =posts;
     }
   );
   this.postServices.emitPostSubject();

  }
ngOnDestroy(){
  this.postSubscription.unsubscribe();
}
  

}
