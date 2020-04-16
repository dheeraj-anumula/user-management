import { ActiveUsersPipe } from './active-users.pipe';
import { User } from '../user/user.component';

describe('ActiveUsersPipe', () => {
  const pipe = new ActiveUsersPipe();
  const users: User[] = [
    { firstName: "", lastName: "", age: 20, login: "user", password: "Passw12", isDeleted: true },
    { firstName: "fname", lastName: "lname", age: 28, login: "user", password: "Passw12", isDeleted: false }
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return active users', () => {
    expect(pipe.transform(users)).toEqual([{ firstName: "fname", lastName: "lname", age: 28, login: "user", password: "Passw12", isDeleted: false }]);
  })

});
