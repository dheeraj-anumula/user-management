import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.component';

@Pipe({
  name: 'activeUsers'
})
export class ActiveUsersPipe implements PipeTransform {

  transform(users: User[]): User[] {
    return users.filter(
      user => !user.isDeleted
    );
  }

}
