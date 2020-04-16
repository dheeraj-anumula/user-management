import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComponent } from './manage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../user/user.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
  const users: User[] = [{ firstName: "", lastName: "", age: 20, login: "user", password: "Passw12" }];
  const getQuoteSpy = userServiceSpy.getUsers.and.returnValue(of(users));

  let router: Router;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsers of UserService on ngOnInit', () => {
    component.ngOnInit();
    expect(userService.getUsers).toHaveBeenCalled();
  })

  it('should set users on ngOnInit', () => {
    const result = component.ngOnInit();
    component.users.subscribe(
      (actualResponse) => {
        userServiceSpy.getUsers().subscribe(
          (expectedResponse) => {
            expect(actualResponse).toEqual(expectedResponse);
          }
        )
      }
    )
  });

  it('should call navigate of Router on createUser',()=>{
    spyOn(router,'navigate');
    component.createUser();
    expect(router.navigate).toHaveBeenCalledWith(['manage/create']);
  })
});
