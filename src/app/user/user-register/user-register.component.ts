import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { config } from 'rxjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}




  ngOnInit(): void {
    this.createRegistrationForm();
  }
  createRegistrationForm(){
    this.registrationForm = this.fb.group(
      {
        userName: new FormControl(null,[Validators.required,Validators.minLength(3)]),
        email:new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
        confirmPassword: new FormControl(null,Validators.required),
        mobile : new FormControl(null,[Validators.required,Validators.maxLength(10)])
      },{
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



  onSubmit(){
    console.log(this.registrationForm);

  }

  get f(){
    return this.registrationForm.controls;
  }

}
