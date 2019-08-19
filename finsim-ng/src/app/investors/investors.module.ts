import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorsRoutingModule } from './investors-routing.module';
import { InvestorsListComponent } from './investors-list/investors-list.component';
import { InvestorsService } from '../services/investors/investors.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InvestorAccountHoldingsDialog } from './investor-account-holdings/investor-account-holdings.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InvestorSortPipe } from './investor-sort.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrderModule } from 'ngx-order-pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';

@NgModule({
  declarations: [
    InvestorsListComponent,
    InvestorAccountHoldingsDialog,
    InvestorSortPipe
  ],
  imports: [
    CommonModule,
    InvestorsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    OrderModule,
    MatProgressSpinnerModule
  ],
  providers: [
    InvestorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents: [InvestorAccountHoldingsDialog]
})
export class InvestorsModule { }
