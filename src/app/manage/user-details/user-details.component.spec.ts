import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { User } from 'src/app/user/user.component';
import { of } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);
  const user:User= {firstName:"",lastName:"",age:20,login:"user",password:"Passw12",id:"6d65de58-c4ff-43ee-b008-214a16dbbb0d"};
  const updateAt="2020-04-07T09:09:29.507Z";
  const getQuoteSpy = userServiceSpy.getUser.and.returnValue(of({...user,updatedAt:updateAt}));

  let router: Router;
  let userService: UserService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
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
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUser of UserService on ngOnInit',()=>{
    component.ngOnInit();
    expect(userService.getUser).toHaveBeenCalledWith(user.id);
  })

  it('should update user and updateForm on ngOnInit',()=>{
    component.ngOnInit();
    expect(component.lastUpdated).toEqual(updateAt);
    expect(component.status).toEqual(user.isDeleted?"Deleted":"Active");
  })

});
