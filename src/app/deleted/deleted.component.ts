import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response as User[];
      },
      (error) => {
        console.log('Error: Get Users API -', error);
      },
      () => {
        console.log('Complete: Get Users API');
      }
    )
  }

}
