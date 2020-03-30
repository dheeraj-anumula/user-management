import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-management';

  users:User[];
  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.getUsers().subscribe(
      (response)=>{
        this.users=response as User[];
        console.log(this.users);
      },
      (error)=>{
        console.log('Error: Get Users API -',error);
      },
      ()=>{
        console.log('Complete: Get Users API');
      }
    )
  }
}
