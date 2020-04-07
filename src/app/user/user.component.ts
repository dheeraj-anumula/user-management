import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input('user')
  user: User;

  @Input('edit')
  edit: boolean;

  statusAction: string;
  color: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.statusAction = this.user.isDeleted ? "Activate" : "Deactivate";
    this.color = this.user.isDeleted ? "red" : "green";
  }

  toggleStatus(id: string) {
    this.user.isDeleted = !this.user.isDeleted;
    this.updateUser();
    location.reload();
  }

  getDetails(id: string) {
    this.router.navigate(['manage/details/', id]);
  }

  editUser(id: string) {
    this.router.navigate(['manage/edit/', id]);
  }

  updateUser() {
    this.userService.updateUser(
      {
        id: this.user.id,
        age: this.user.age,
        password: this.user.password,
        isDeleted: this.user.isDeleted
      }
    ).subscribe(
      (result) => {
        console.log('Result: Update User API - ', result);
      },
      (error) => {
        console.log('Error: Update User API - ', error);
      },
      () => {
        console.log('Complete: Update User API');
      }
    );
  }

}

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted?: boolean;
}