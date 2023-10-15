import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.css']
})

export class PostpageComponent {

  array: any = [];
  commentArray: any = [];
  useRname: any = '';
  likeButton: number = 0;


  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    let userName: any = (localStorage.getItem('userData'));
    this.useRname = JSON.parse(userName).username

    this.getData();
    this.getComment();
  }

  postS(data: any) {
    this.http.post('http://localhost:3000/post', data).subscribe(res => {
      console.log(res);
    })
  }

  getData() {
    this.http.get('http://localhost:3000/post').subscribe(res => {
      console.log(res);
      this.array = res;
    })
  }

  addComment(data: any) {
    data.name = this.useRname
    this.http.post('http://localhost:3000/comments', data).subscribe((res: any) => {
      this.getComment();
    })
  }

  getComment() {
    this.http.get('http://localhost:3000/comments').subscribe(res => {
      this.commentArray = res;
    })
  }

  logout() {
    localStorage.removeItem('userData');
    this.route.navigate(['login']);
  }

  likeBtn() {
    this.likeButton++;
  }

}
