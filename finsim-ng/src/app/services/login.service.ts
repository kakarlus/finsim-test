import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(formObject: Object) {
    console.log(formObject);
    const params = new HttpParams({
      fromObject: {
        username: formObject['username'],
        password: formObject['password'],
        grant_type: 'password'
      }
    });

    return this.httpClient.post('http://localhost:4101/Token', params, this.httpOptions);
  }

  setToken(token: any) {
    localStorage.setItem("finsim-user-token", token);
  }

  getToken() {
    return localStorage.getItem("finsim-user-token")
  }

  isLoggedIn() {
    // no validation on token
    return this.getToken() !== null;
  }
  
  logout() {
    localStorage.removeItem("finsim-user-token");
    this.router.navigate(["/"]);
  }
}
