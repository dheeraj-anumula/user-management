import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user.component';
import { UserService } from '../user.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  del:Observable<Data>;
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  users: Observable<User[]>;

  ngOnInit(): void {
    this.del=this.activatedRoute.data;
    this.users = this.userService.getUsers() as Observable<User[]>;
  }

}
