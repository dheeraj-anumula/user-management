import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user.component'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:8080/users');
  }

  getUser(id: string) {
    return this.http.get('http://localhost:8080/users/' + id);
  }

  createUser(user: User) {
    return this.http.post('http://localhost:8080/users', user);
  }

  updateUser(user: Partial<User>) {
    return this.http.put('http://localhost:8080/users/' + user.id, {
      age: user.age,
      isDeleted: user.isDeleted
    });
  }

  delete(id: string) {
    return this.http.delete('http://localhost:8080/users/' + id);
  }

}
