import { Post } from '../post';
import * as rxjs  from 'rxjs';
import * as firebase from  'firebase';
export class PostService {

    posts = [];
subjectPost = new rxjs.Subject<Post[]>();

constructor() {

    this.getPosts();

}
getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: firebase.database.DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        }
      );
  }
     
addPost( p:Post){
        this.posts.push(p);
        this.emitPostSubject();
        this.savePosts();
      }

emitPostSubject() {
        this.subjectPost.next(this.posts.slice());
      }
deletePost(index :number){
   this.posts.splice(index,1);
   this.emitPostSubject();
   this.savePosts();
}
gePostByIndex(i : number):Post{

    return this.posts[i];
}
savePosts(){
    firebase.database().ref('/posts').set(this.posts);
}

loveit(index : number)
{
    this.posts[index].loveIts++;
    this.savePosts();
}
dontloveIt(index : number)
{
    this.posts[index].loveIts--;
    this.savePosts();
}
}
