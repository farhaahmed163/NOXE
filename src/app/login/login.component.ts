import { Component, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string = '';
  isLoading: boolean = false;
  // ngDoCheck(): void {
  //   console.log(this.registerForm.get('rePassword')?.errors)
  //   if (this.registerForm.controls['password'].value == this.registerForm.controls['rePassword'].value) {
  //     console.log("🤬🤬🤬🤬🤬")
  //   }
  //   console.log(this.isLoading)
  // }
  constructor(private _AuthService: AuthService, private _Router: Router, private formbuilder: FormBuilder) {

  }
  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/)]),

  });


  sunbmitloginForm(loginForm: FormGroup) {
    this.isLoading = true
    console.log(loginForm.value);
    this._AuthService.signIn(loginForm.value).subscribe({
      next: (response) => {
        this.isLoading = false
        if (response.message === 'success') {
          localStorage.setItem('userToken', response.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['/home'])
          console.log(response)
        }
      }
      , error: (err) => {
        console.log(err)
        this.isLoading = false
        this.error = err.error.errors.msg
      }
    })
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this._Router.navigate(['/home'])
        }
      }
    })

  }

}
