import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user.component';

describe('UserService', () => {
  let userService: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const user: User = { firstName: "", lastName: "", age: 20, login: "user", password: "Passw12", isDeleted: true, id: "6d65de58-c4ff-43ee-b008-214a16dbbb0d" };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should get users', () => {

    userService.getUsers().subscribe((data) => {
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });

  it('should get user', () => {

    userService.getUser("user").subscribe((data) => {
      expect(data).toEqual({});
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users/user');
    expect(req.request.method).toEqual('GET');

    req.flush({});

    httpTestingController.verify();
  });

  it('should create user', () => {

    userService.createUser(user).subscribe((data) => {
      expect(data).toEqual({});
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('POST');

    req.flush({});

    httpTestingController.verify();
  });

  it('should update user', () => {

    userService.updateUser(user).subscribe((data) => {
      expect(data).toEqual({});
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users/' + user.id);
    expect(req.request.method).toEqual('PUT');

    req.flush({});

    httpTestingController.verify();
  });

  it('should delete user', () => {

    userService.delete(user.id).subscribe((data) => {
      expect(data).toEqual({});
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users/' + user.id);
    expect(req.request.method).toEqual('DELETE');

    req.flush({});

    httpTestingController.verify();
  });
});
