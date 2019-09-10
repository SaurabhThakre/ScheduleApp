import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { post } from 'selenium-webdriver/http';
import { windowTime } from 'rxjs/operators';
import { Time } from '@angular/common';



@Component({
  selector: 'app-setappointment',
  templateUrl: './setappointment.component.html',
  styleUrls: ['./setappointment.component.css']
})
export class SetappointmentComponent implements OnInit {
  isSend = false;
  public daters: string;
  public timers: string;
  public datearray: string[];
  public timearray: string[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    }

  // tslint:disable-next-line: max-line-length
  onCreatePost(postData: Post, dated: string, timed: string, num1: string, num2: string, name1: string, name2: string, titled: string, placed: string, Message1: string, Message2: string) {
    // Send Http request
    this.http.post(
      'https://scheduleapp-1567399660241.firebaseio.com/posts.json',
       postData
       ).subscribe(responseData => {
        console.log(responseData);
      });


    this.daters = dated;
    this.timers = timed;
    console.log(this.daters.split('-'));
    this.datearray = this.daters.split('-');
    const x = +this.datearray[0]; // year
    console.log(x);
    const y = +this.datearray[1]; // month
    console.log(y);
    const z = +this.datearray[2]; // date
    console.log(z);
    console.log(this.timers.split(':'));
    this.timearray = this.timers.split(':');
    let v = +this.timearray[0]; // hour
    console.log(v);
    const w = +this.timearray[1]; // minutes
    console.log(w);
    let change = 1;

     // tslint:disable-next-line: max-line-length
    Message1 = 'Dear ' + name1 + ', You have ' + titled + ' appointment scheduled with ' + name2 + ', on ' + dated + ', ' + timed + ' at ' + placed;
     // tslint:disable-next-line: max-line-length
    Message2 = 'Dear ' + name2 + ', You have ' + titled + ' appointment scheduled with ' + name1 + ', on ' + dated + ', ' + timed + ' at ' + placed;

    this.http.get(`http://localhost:3000/sms?no1=${num1}&no2=${num2}&text1=${Message1}&text2=${Message2}`)
    .subscribe(responseData => {
      // ...
      this.isSend = true;
    });


    // tslint:disable-next-line: only-arrow-functions
    window.setInterval(function() {
      const date = new Date();
      const a = date.getDate().toString();
      const b = date.getFullYear().toString();
      const c = date.getHours().toString();
      const d = date.getMinutes().toString();
      const e = z.toString(); // date

      if (change === 1) {
        if (a !== e) {
          v = v + 24 - 3;
        } else {
          v = v - 3;
        }
        change = 0;
      }

      console.log(v);

      const f = x.toString(); // year
      const g = v.toString(); // hour
      const h = w.toString(); // minutes

       // tslint:disable-next-line: max-line-length
      Message1 = 'Dear ' + name1 + ', You have ' + titled + ' appointment scheduled with ' + name2 + ', on ' + dated + ', ' + timed + ' at ' + placed;
      // tslint:disable-next-line: max-line-length
      Message2 = 'Dear ' + name2 + ', You have ' + titled + ' appointment scheduled with ' + name1 + ', on ' + dated + ', ' + timed + ' at ' + placed;


      if (a === e && b === f && c === g && d === h) {
        // tslint:disable-next-line: max-line-length tslint:disable-next-line: only-arrow-functions
        $.get(`http://localhost:3000/sms?no1=${num1}&no2=${num2}&text1=${Message1}&text2=${Message2}`, function(data, status) {
          alert('Appointment Notification');
        });
      }
  }, 60000);


      // tslint:disable-next-line: deprecation
    $(document).ready(() => {
      // tslint:disable-next-line: deprecation tslint:disable-next-line: only-arrow-functions
        alert('Apointment has been scheduled successfully');
        $('#myForm').trigger('reset');
      });

  }


}
