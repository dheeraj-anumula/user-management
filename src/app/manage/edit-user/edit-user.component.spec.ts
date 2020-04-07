import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';
import { UserService } from 'src/app/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user/user.component';
import { of } from 'rxjs';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser', 'updateUser']);
  const user: User = { firstName: "", lastName: "", age: 20, login: "user", password: "Passw12", id: "6d65de58-c4ff-43ee-b008-214a16dbbb0d" };
  const getUserSpy = userServiceSpy.getUser.and.returnValue(of(user));
  const updateUserSpy = userServiceSpy.updateUser.and.returnValue(of())

  let updateFormValue = { password: user.password, age: user.age };
  let router: Router;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: ActivatedRoute, useValue: { params: of({ id: user.id }) } }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUser of UserService on ngOnInit', () => {
    component.ngOnInit();
    expect(userService.getUser).toHaveBeenCalledWith(user.id);
  })

  it('should update user and updateForm on ngOnInit', () => {
    component.ngOnInit();
    expect(component.user).toEqual(user);
    expect(component.updateForm.value).toEqual(updateFormValue);
  })

  it('should call updateUser of UserService on updateUser', () => {
    component.updateUser();
    expect(userService.updateUser).toHaveBeenCalledWith({ ...updateFormValue, id: user.id });
  })

});
