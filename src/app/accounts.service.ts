import { Injectable, EventEmitter } from "@angular/core";
import { loggingService } from "./logging.service";

@Injectable()
export class accountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    constructor(private logser:loggingService){}

    statusAlert = new EventEmitter<string>();

    addAccount(name:string, status:string){
        this.accounts.push({name: name, status: status});
        this.logser.logStatus(status);
    }
    updateStatus(id: number, status:string){
        this.logser.logStatus(status);
        this.accounts[id].status = status;
    }
}