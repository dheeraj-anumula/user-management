import { DeletedUsersPipe } from './deleted-users.pipe';
import { User } from '../user/user.component';

describe('DeletedUsersPipe', () => {

  const pipe = new DeletedUsersPipe();
  const users: User[] = [
    { firstName: "fName", lastName: "", age: 20, login: "user", password: "Passw12", isDeleted: true },
    { firstName: "fname", lastName: "lname", age: 28, login: "user", password: "Passw12", isDeleted: false }
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return deactive users', () => {
    expect(pipe.transform(users)).toEqual([{ firstName: "fName", lastName: "", age: 20, login: "user", password: "Passw12", isDeleted: true }]);
  })
});
