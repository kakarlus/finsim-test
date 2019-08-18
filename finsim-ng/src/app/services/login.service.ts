import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      // 'Content-Type':  'application/json'
    })
  };
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  login() {
    const obj = {
      username: 'FsTest',
      password: 'F1nS!m',
      grant_type: 'password'
    };

    // return this.httpClient.post('https://finsimtestwebapi.azurewebsites.net/Token', obj, this.httpOptions);
    return of({
        "access_token": "QhWWkdsAOKXePP_Ht0bmLyNzOuS8j-moNNzUkpZUfeKS5DmhCjJjnVH8NAWu-hjisCFq9gqZaO_uqwLe54Y929eGXTaaj2NE7jBiQGOmUxGAso2WIFWC9i5dOxoPap26vsNmtrE3lzxTf0_p4Q4PdxRRuXttShV7M_dj654l_V_Xl4Ix-jwCBMAYg5YYdVrZ_9hC4bs1Tyde04qPI34OMw",
        "token_type": "bearer",
        "expires_in": 1209599,
        "userName": "FsTest",
        ".issued": "Sat, 17 Aug 2019 15:00:06 GMT",
        ".expires": "Sat, 31 Aug 2019 15:00:06 GMT"
    });
  }

  setToken(token) {
    localStorage.setItem("currentUser", token)
  }

  getToken() {
    return localStorage.getItem("currentUser")
  }

  isLoggedIn() {
    // no validation on token
    return this.getToken() !== null;
  }
  
  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/"]);
  }
}
