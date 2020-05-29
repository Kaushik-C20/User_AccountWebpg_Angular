import { Component, Input } from '@angular/core';
import { loggingService } from '../logging.service';
import { accountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [loggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logservice:loggingService, private accountservice:accountService){}

  onSetTo(status: string,id: number) {
    this.accountservice.updateStatus(this.id,status);
    this.logservice.logStatus(status);
    this.accountservice.statusAlert.emit(status);
  }
}
