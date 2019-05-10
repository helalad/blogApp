import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post-service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

 formpost: FormGroup;
  constructor(private postService :PostService, private route : Router , private formbuilder : FormBuilder) { }
initForm(){
  this.formpost = this.formbuilder.group({
    'title':'',
    'content':''
  });
}
  ngOnInit() {
   this.initForm();
  }
savePost(){
      this.postService.addPost(new Post(this.formpost.value['title'],this.formpost.value['content']));
    this.route.navigate(['posts']);

  }
}
