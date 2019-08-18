import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from  'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      // 'Content-Type':  'application/json'
    })
  };
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  getInvestments() {
    // return this.httpClient.post('https://finsimtestwebapi.azurewebsites.net/api/Investments', obj, this.httpOptions);
    return of([
        {
            "Id": 1,
            "InvestmentCode": "0001",
            "InvestmentName": "CK HUTCHISON HOLDINGS LTD",
            "Market": "HKE",
            "Currency": "HKD",
            "Price": 14.4721,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 2,
            "InvestmentCode": "GAP",
            "InvestmentName": "GALE PACIFIC LIMITED",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 0.33,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 3,
            "InvestmentCode": "M",
            "InvestmentName": "MACY'S INC",
            "Market": "NYSE",
            "Currency": "USD",
            "Price": 33.6557,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 4,
            "InvestmentCode": "A2M",
            "InvestmentName": "THE A2 MILK COMPANY",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 13.79,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 5,
            "InvestmentCode": "ALL",
            "InvestmentName": "ARISTOCRAT LEISURE",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 23.14,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 6,
            "InvestmentCode": "BHP",
            "InvestmentName": "BHP GROUP LIMITED",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 40.24,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 7,
            "InvestmentCode": "CAT",
            "InvestmentName": "CATAPULT GRP INT LTD FPO",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 0.795,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 8,
            "InvestmentCode": "CCP",
            "InvestmentName": "CREDIT CORP GROUP",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 22.04,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 9,
            "InvestmentCode": "LNK",
            "InvestmentName": "LINK ADMIN HLDG",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 7.63,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 10,
            "InvestmentCode": "CBA",
            "InvestmentName": "COMMONWEALTH BANK",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 95,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 11,
            "InvestmentCode": "MQG",
            "InvestmentName": "MACQUARIE GROUP LTD",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 125.74,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 12,
            "InvestmentCode": "SEK",
            "InvestmentName": "SEEK LIMITED",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 18.25,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        },
        {
            "Id": 13,
            "InvestmentCode": "WBC",
            "InvestmentName": "WESTPAC BANKING CORP",
            "Market": "ASX",
            "Currency": "AUD",
            "Price": 26.85,
            "PriceUpdatedUtc": "2019-08-17T15:01:39.9762369Z"
        }
    ])
  }
}
