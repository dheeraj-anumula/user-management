import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  updateForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')).bind(this)
    ]),
    age: new FormControl(''),
  });
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.userService.getUser(param['id']).subscribe(
          (result) => {
            this.user = result as User;
            this.updateForm.setValue({
              password: this.user.password,
              age: this.user.age,
            });
            console.log('Result: Get User API - ', result);
          },
          (error) => {
            console.log('Error: Get User API - ', error);
          },
          () => {
            console.log('Complete: Get User API');
          }
        );
      }
    );
  }

  updateUser() {
    this.userService.updateUser(
      {
        ...this.updateForm.value,
        id: this.user.id
      }

    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        this.updateForm.reset();
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
      }
    );
  }

  passwordValidator(passRegex: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const testMatch = passRegex.test(control.value);
      return testMatch ? null : { 'Require atleast one character and one Number': { value: control.value } };
    };
  }

}
