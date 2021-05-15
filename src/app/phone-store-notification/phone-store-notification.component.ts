import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-phone-store-notification',
  templateUrl: './phone-store-notification.component.html',
  styleUrls: ['./phone-store-notification.component.less']
})
export class PhoneStoreNotificationComponent implements OnInit,OnDestroy {

  message: string;
  messages: string[];
  subscriptions : Subscription[];
  
  constructor(private notificationService: NotificationService) { 
    this.subscriptions = [];
    this.message = "";
    this.messages = [];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => subscription.unsubscribe());  
  }

  ngOnInit(): void {
    this.subscriptions.push(this.notificationService.getMessage().subscribe({next:(value: string)=> {
      this.message = value;
      this.messages.push(value);
      setTimeout(() => { console.log("poping after timeout"); this.messages.shift()},5000);
    }}));
  }

}
