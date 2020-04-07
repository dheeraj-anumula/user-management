import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { UserService } from 'src/app/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';



describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  const userServiceSpy = jasmine.createSpyObj('UserService', ['createUser']);
  const createUserSpy = userServiceSpy.createUser.and.returnValue(of());

  let userService;

  let createForm: FormGroup = new FormGroup({
    firstName: new FormControl('fname'),
    lastName: new FormControl('lname'),
    login: new FormControl('userTen'),
    password: new FormControl('Pass12'),
    age: new FormControl(23),
  });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    component.createForm = createForm;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createUser', () => {
    component.createUser();
    expect(userService.createUser).toHaveBeenCalledWith(createForm.value);
  })
});
