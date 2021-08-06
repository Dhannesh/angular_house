import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  userSubmitted!:boolean;

  constructor(private fb: FormBuilder, private userService:UserServiceService) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }
  createRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(10),
        ]),
      },
      {
        validator: this.passwordMatchingValidator,
      }
    );
  }

  passwordMatchingValidator(control: AbstractControl) {
    const password: string = control.get('password')?.value;
    const confirmPassword: string = control.get('confirmPassword')?.value;
    if (password !== confirmPassword)
      [control.get('confirmPassword')?.setErrors({ NoPasswordMatch: true })];
  }

  onSubmit() {
    this.userSubmitted = true;
    if(this.registrationForm.valid){

    //this.user = Object.assign(this.user,this.registrationForm.value);
    //localStorage.setItem("Users",JSON.stringify(this.user));
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.userSubmitted = false;
    }
  }

  userData(): User{
    return this.user= {
      userName : this.f['userName'].value,
      email : this.f['email'].value,
      password : this.f['password'].value,
      mobile : this.f['mobile'].value
    }
  }


  get f() {
    return this.registrationForm.controls;
  }
}
