import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.component';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: User[],userType:boolean): User[] {
    return users?.filter(
      user => userType===user.isDeleted
    );
  }

}
