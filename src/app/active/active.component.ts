import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.component';
import { UserService } from 'src/app/user.service';
import { ActiveUsersPipe } from './active-users.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
  providers: [ActiveUsersPipe]
})
export class ActiveComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService, private activeUsersPipe: ActiveUsersPipe) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers() as Observable<User[]>;
  }
}
