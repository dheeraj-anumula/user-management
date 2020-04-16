import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.component';

@Pipe({
  name: 'deletedUsers'
})
export class DeletedUsersPipe implements PipeTransform {

  transform(users: User[]): User[] {
    return users.filter(
      user => user.isDeleted
    );
  }

}
