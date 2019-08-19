import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from  'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InvestorsService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };
  
  constructor(private httpClient: HttpClient, private router: Router) { }
  
  getInvestors() {
    return this.httpClient.get('http://localhost:4101/Investors');
  }
}

