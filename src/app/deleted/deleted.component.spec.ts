import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedComponent } from './deleted.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../user/user.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { DeletedUsersPipe } from './deleted-users.pipe';

describe('DeletedComponent', () => {
  let component: DeletedComponent;
  let fixture: ComponentFixture<DeletedComponent>;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
  const users = [
    { firstName: "", lastName: "", age: 20, login: "user", password: "Passw12", isDeleted: true },
    { firstName: "", lastName: "", age: 20, login: "user", password: "Passw12", isDeleted: false }
  ];
  const getUsersSpy = userServiceSpy.getUsers.and.returnValue(of(users));

  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedComponent, DeletedUsersPipe],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsers of UserService on ngOnInit', () => {
    component.ngOnInit();
    expect(userService.getUsers).toHaveBeenCalled();
    expect(component.users).toEqual(users);
  })

});
