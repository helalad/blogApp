export class Post {

    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

 
     constructor(title1 : String,content:String) {
      this.title = title1+'';
      this.content=content+'';
        this.created_at = new Date(); 
        this.loveIts =0;
     }
}
