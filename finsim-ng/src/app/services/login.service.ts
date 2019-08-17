import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Authorization': 'my-auth-token'
    })
  };
  
  constructor(private httpClient: HttpClient) { }

  login() {
    return this.httpClient.post(
      'https://finsimtestwebapi.azurewebsites.net/Token',
      {
        username: 'FsTest',
        password: 'F1nS!m',
        grant_type: 'password'
      },
      this.httpOptions
    );
  }
}
