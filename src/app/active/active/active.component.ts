import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.component';
import { UserService } from 'src/app/user.service';
import { ActiveUsersPipe } from '../active-users.pipe';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
  providers:[ActiveUsersPipe]
})
export class ActiveComponent implements OnInit {

  activeUsers:User[];
  
  constructor(private userService:UserService,private activeUsersPipe:ActiveUsersPipe) { }

  ngOnInit(): void {
  
    this.userService.getUsers().subscribe(
      (response)=>{
        this.activeUsers=this.activeUsersPipe.transform(response as User[]);
        console.log(this.activeUsers);
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
