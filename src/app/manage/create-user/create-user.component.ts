import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, AbstractControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')).bind(this)
    ]),
    age: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(
      this.createForm.value
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        this.createForm.reset();
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
