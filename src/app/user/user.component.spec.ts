import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent, User } from './user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['updateUser']);
  const user: User = { firstName: "", lastName: "", age: 20, login: "user", password: "Passw12", isDeleted: true};

  let router: Router;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { providers: UserService, useValue: userServiceSpy }
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UserService);
    component.user = { firstName: "", lastName: "", age: 20, login: "user", password: "Passw12", isDeleted: true };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set statusAction and color on ngOnInit', () => {
    component.ngOnInit();
    expect(component.statusAction).toBe(user.isDeleted ? "Activate" : "Deactivate");
    expect(component.color).toBe(user.isDeleted ? "red" : "green");
  })

  it('should call navigate of Router on getDetails', () => {
    spyOn(router, 'navigate');
    component.getDetails(user.id);
    expect(router.navigate).toHaveBeenCalledWith(['manage/details/', user.id])
  })

  it('should call navigate of Router on editUser', () => {
    spyOn(router, 'navigate');
    component.editUser(user.id);
    expect(router.navigate).toHaveBeenCalledWith(['manage/edit/', user.id])
  })

  it('should call updateUser of UserService on updateUser', () => {
    spyOn(userService,'updateUser').and.returnValue(of(user));
    component.updateUser();
    expect(userService.updateUser).toHaveBeenCalledWith({
      id: user.id,
      age: user.age,
      password: user.password,
      isDeleted: user.isDeleted
    });
  })

});
