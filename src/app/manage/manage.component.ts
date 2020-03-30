import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  users:User[];
  edit:boolean=true;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  
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
