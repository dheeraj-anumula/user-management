import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/user/user.component';
import { UserService } from 'src/app/user.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  users:Observable<User[]>;
  
  edit:boolean=true;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.users=this.userService.getUsers() as Observable<User[]>;
  }

  createUser(){
    this.router.navigate(['manage/create'])
  }

}
