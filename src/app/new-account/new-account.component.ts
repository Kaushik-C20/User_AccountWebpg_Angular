import { Component } from '@angular/core';
import { loggingService } from '../logging.service';
import { accountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [loggingService]
})
export class NewAccountComponent {

  constructor(private logservice:loggingService,
    private accountservice:accountService){
      this.accountservice.statusAlert.subscribe(
        (status:string) => alert('New Status of the Account : ' + status));
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.addAccount(accountName,accountStatus);
    this.logservice.logStatus(accountStatus);
  }
}
