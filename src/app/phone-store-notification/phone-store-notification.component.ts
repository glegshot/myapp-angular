import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-phone-store-notification',
  templateUrl: './phone-store-notification.component.html',
  styleUrls: ['./phone-store-notification.component.less']
})
export class PhoneStoreNotificationComponent implements OnInit {

  message: string = "Hello there";
  messages: string[] = [];
  constructor(private notificationService: NotificationService) { 
  }

  ngOnInit(): void {
    this.notificationService.getMessage().subscribe( (value: string)=> {
      this.message = value;
      this.messages.push(value);
      setTimeout(() => { console.log("poping after timeout"); this.messages.shift()},5000);
    });
  }

}
