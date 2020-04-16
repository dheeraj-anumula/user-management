import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveComponent } from './active.component';
import { of } from 'rxjs';
import { UserService } from '../user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../user/user.component';
import { ActiveUsersPipe } from './active-users.pipe';

describe('ActiveComponent', () => {
  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
  const users: User[] = [{ firstName: "", lastName: "", age: 20, login: "user", password: "Passw12" }];
  const getUsersSpy = userServiceSpy.getUsers.and.returnValue(of(users));

  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveComponent, ActiveUsersPipe],
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
    fixture = TestBed.createComponent(ActiveComponent);
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
});
