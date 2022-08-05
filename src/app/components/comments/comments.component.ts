import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Comments{
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentArray: Comments[] = [];
  loadingStatus= true;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.loadAllComment();
  }

  private loadAllComment() {
    this._http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data=>{
      //@ts-ignore
      this.commentArray=data;
      this.loadingStatus=false;
    })
  }
}
