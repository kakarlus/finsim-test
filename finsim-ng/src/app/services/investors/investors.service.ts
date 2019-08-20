import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of } from  'rxjs';
import { Router } from '@angular/router';
import { Investor } from 'src/app/investors/investor';

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

  saveInvestorAccountHoldings(investor: Investor) {
    console.log(JSON.stringify(investor));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpClient.post('http://localhost:4101/Investors', JSON.stringify(investor), httpOptions);
  }
}
