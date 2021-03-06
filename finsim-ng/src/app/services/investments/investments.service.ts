import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from  'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getInvestments() {
    return this.httpClient.get('http://localhost:4101/Investments');
  }
}
