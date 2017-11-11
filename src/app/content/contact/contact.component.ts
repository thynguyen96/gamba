import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../serives/user.service';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ngOnInit() {
  }

 
}
