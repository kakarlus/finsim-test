import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authnFormGroup: FormGroup;
  isAttemptingLogin = false;
  loginError: Object;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.authnFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.loginService.logout();
  }

  get username() {
    return this.authnFormGroup.get('username');
  }

  get password() {
    return this.authnFormGroup.get('password');
  }

  attemptLogin(loginForm: NgForm) {
    this.isAttemptingLogin = true;
    this.loginError = null;
    this.loginService.login(loginForm.value).subscribe(
      (res) => {
        this.loginService.setToken(res['access_token']);
        this.router.navigate(['investments']);
      },
      (err) => {
        this.isAttemptingLogin = false;
        this.loginError = err.error;
      }
    )
  }

}
