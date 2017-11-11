import { Component, OnInit } from '@angular/core';
import { UserService } from '../serives/user.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: Person;
  constructor(private userService: UserService) {
    this.model = new Person();
  }

  ngOnInit() {
  }

  register(event) {
    console.log(this.model);
    this.userService.create(this.model);
  }
}
