import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;

@Injectable()
export class UserService {
  constructor(public http: HttpClient, private router: Router) { }
  getPosts() {
    this.http.get('http://localhost:3000/api/Users').subscribe(data => {
      console.log(data);
    });
  }

  create(user: Person) {
    this.http.post('http://localhost:3000/api/Users', user)
      .subscribe(
      res => {
        console.log('--' + true);
        this.router.navigate(['/page3']);
      },
      err => {
        console.log('--' + false);
        user.username = '';
        user.email = '';
        user.password = '';
      }
      );
  }

  checkLogin(user: any) {
    return this.http.post('http://localhost:3000/api/Users/login', user);
  }
}
