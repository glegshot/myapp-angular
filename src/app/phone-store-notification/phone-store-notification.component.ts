import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-store-notification',
  templateUrl: './phone-store-notification.component.html',
  styleUrls: ['./phone-store-notification.component.less']
})
export class PhoneStoreNotificationComponent implements OnInit {

  message: string = "Hello there";
  constructor() { }

  ngOnInit(): void {
  }

}
