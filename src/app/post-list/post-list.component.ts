import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 
  Posts = [ {
    title: "",
    content: "",
    loveIts: 0,
    created_at: new Date()
  }]
  constructor() { }

  ngOnInit() {
  }

}
