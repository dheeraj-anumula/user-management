import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.component';
import { UserService } from 'src/app/user.service';
import { DeletedUsersPipe } from './deleted-users.pipe';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css'],
  providers:[DeletedUsersPipe]
})
export class DeletedComponent implements OnInit {

  deletedUsers:User[];
  
  constructor(private userService:UserService,private deletedUsersPipe:DeletedUsersPipe) { }

  ngOnInit(): void {
  
    this.userService.getUsers().subscribe(
      (response)=>{
        this.deletedUsers=this.deletedUsersPipe.transform(response as User[]);
        console.log(this.deletedUsers);
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
