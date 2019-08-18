import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authn: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.authn = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.loginService.logout();
  }

  get username() {
    return this.authn.get('username');
  }

  get password() {
    return this.authn.get('password');
  }

  attemptLogin() {
    this.loginService.login().subscribe((res) => {
      this.loginService.setToken(res);
      this.router.navigate(['investments']);
    })
  }

}
