import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShow = false;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  logout() {
    localStorage.clear();
  }
}
