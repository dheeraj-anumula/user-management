import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user/user.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User;
  status:string;
  lastUpdated;
  constructor(private userService:UserService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (param) => {
        this.userService.getUser(param['id']).subscribe(
          (result:{age,id,login,firstName,lastName,password,updatedAt}) => {
            this.user = result as User;
            this.lastUpdated=result.updatedAt;
            this.status= this.user.isDeleted?"Deleted":"Active";
            console.log('Result: Get User API - ', result);
          },
          (error) => {
            console.log('Error: Get User API - ', error);
          },
          () => {
            console.log('Complete: Get User API');
          }
        );
      }
    );
  }

}
