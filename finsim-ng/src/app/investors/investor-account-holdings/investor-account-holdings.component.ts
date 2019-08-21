import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Investor, Account, Holding } from '../investor';
import { Investment } from '../../investments/investment';
import { InvestmentsService } from 'src/app/services/investments/investments.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map, tap } from 'rxjs/operators';
import { InvestorsService } from 'src/app/services/investors/investors.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'investor-account-holdings',
  templateUrl: './investor-account-holdings.component.html',
  styleUrls: ['./investor-account-holdings.component.scss']
})
export class InvestorAccountHoldingsDialog {

  isHoldingsFormVisible = false;
  investments: Investment[];
  filteredInvestments: Observable<Investment[]>;

  selectedInvestor: Investor;
  selectedAccount: Account;
  selectedInvestment: Investment;
  selectedUnits: string;
  formGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<InvestorAccountHoldingsDialog>,
      @Inject(MAT_DIALOG_DATA) public data: Object, 
      private investmentsService: InvestmentsService,
      private investorsService: InvestorsService,
      private toastNotification: MatSnackBar) {
    
    this.selectedInvestor = data['investor'];
    this.selectedAccount = data['account'];
    this.formGroup = new FormGroup({
      autocompleteInput: new FormControl(),
      unitsInput: new FormControl()
    });

    this.investmentsService.getInvestments().subscribe((res: Investment[]) => {
      this.investments = res;
      
      this.filteredInvestments = this.formGroup.get('autocompleteInput').valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
    
  }

  private _filter(value: string): Investment[] {
    const filterValue = value.toLowerCase();

    return this.investments.filter(option => {
      return option.InvestmentName.toLowerCase().includes(filterValue)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setNewHoldings($event){
    const selectedInvestmentName = $event.option.value;
    this.selectedInvestment = this.investments.filter((investment: Investment) => investment.InvestmentName.includes(selectedInvestmentName))[0];
  }

  showHoldingsForm() {
    this.selectedInvestment = null;
    this.selectedUnits = null;
    this.isHoldingsFormVisible = true;
  }

  saveHoldings() {
    const i: number = this.selectedInvestor.Accounts.indexOf(this.selectedAccount);
    var holding: any = {
      Id: (this.selectedAccount.Holdings ? this.selectedAccount.Holdings.length+1 : 0) ,
      InvestmentCode: this.selectedInvestment.InvestmentCode,
      Price: this.selectedInvestment.Price,
      Units: this.formGroup.get('unitsInput').value,
      PurchaseDateUtc: new Date().toUTCString()
    }

    let clonedInvestor = JSON.parse(JSON.stringify(this.selectedInvestor));
    
    if (!clonedInvestor.Accounts[i].Holdings) clonedInvestor.Accounts[i].Holdings = new Array<any>();
    clonedInvestor.Accounts[i].Holdings.push(holding);

    this.investorsService.saveInvestorAccountHoldings(clonedInvestor).subscribe(
      (res:any) => {
        console.log(res);
      },
      err => {
        this.toastNotification.open(err.error.Message, 'Close', {
          duration: 3000
        });
      }
    );

  }

}
