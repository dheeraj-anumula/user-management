import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input('usersList') users: User[];
  @Input('enableEdit') edit: boolean;

  userStyle: { width: string, "margin-bottom": string };

  constructor() { }

  ngOnInit(): void {
    this.userStyle = {
      width: this.edit ? '40%' : '100%',
      "margin-bottom": "10px"
    }
  }

}
