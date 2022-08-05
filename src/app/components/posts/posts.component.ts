import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Post{
  body: string,
  id: string;
  title: string;
  userId: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postArray: Post[]=[];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.loadAllPosts();
  }

  private loadAllPosts() {
    this._http.get<Post>('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
      console.log(data);
      // this.postArray.push(data);
      //@ts-ignore
      this.postArray=data;
      console.log(this.postArray);
    });
  }
}
