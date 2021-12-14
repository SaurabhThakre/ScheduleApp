import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loadedPosts = [];
  isFetching = false;
  isClicked = false;
  gmail1: string;
  gpass1: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.fetchPosts();
  }
  onFetchPosts(gmail: string, gpass: string) {
    this.gmail1 = gmail;
    this.gpass1 = gpass;
    this.isClicked = true;
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }


  private fetchPosts() {

    this.isFetching = true;
    this.http
      .get<{ [key: string]: Post }>('https://scheduleapp-1567399660241.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        // ...
        this.loadedPosts = posts;
        this.isFetching = false;
      });


    // tslint:disable-next-line: deprecation
    $(document).ready(() => {
        $('#myForm').trigger('reset');
      });
  }

  deletePosts() {
    return this.http.delete('https://scheduleapp-1567399660241.firebaseio.com/posts.json');
  }

}
