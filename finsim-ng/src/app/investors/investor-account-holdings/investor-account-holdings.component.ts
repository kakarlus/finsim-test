import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'investor-account-holdings',
  templateUrl: './investor-account-holdings.component.html',
  styleUrls: ['./investor-account-holdings.component.scss']
})
export class InvestorAccountHoldingsDialog {

  constructor(public dialogRef: MatDialogRef<InvestorAccountHoldingsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Account[]) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
