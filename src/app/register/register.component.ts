import { Component, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements DoCheck {
  error: string = '';
  isLoading: boolean = false;
  ngDoCheck(): void {
    console.log(this.registerForm.get('rePassword')?.errors)
    if (this.registerForm.controls['password'].value == this.registerForm.controls['rePassword'].value) {
      console.log("🤬🤬🤬🤬🤬")
    }
    console.log(this.isLoading)
  }
  constructor(private _AuthService: AuthService, private _Router: Router, private formbuilder: FormBuilder) {

  }
  registerForm: FormGroup = this.formbuilder.group({
    name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/)]),
  },
    { validator: this.passwordMatchValidator });

  passwordMatchValidator(form: FormGroup) {
    const password: any = form.get('password');
    const confirmPassword: any = form.get('rePassword');
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  }

  sunbmitRegisterForm(registerForm: FormGroup) {
    this.isLoading = true
    console.log(registerForm.value);
    this._AuthService.signUp(registerForm.value).subscribe({
      next: (response) => {
        this.isLoading = false
        if (response.message === 'success') {
          this._Router.navigate(['/login'])
        }
      }
      , error: (err) => {
        console.log(err)
        this.isLoading = false
        this.error = err.error.errors.msg
      }
    })
  }

}

