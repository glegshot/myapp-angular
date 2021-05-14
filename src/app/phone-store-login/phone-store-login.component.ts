import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-phone-store-login',
  templateUrl: './phone-store-login.component.html',
  styleUrls: ['./phone-store-login.component.less']
})
export class PhoneStoreLoginComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  notify(){
    this.notificationService.sendMessage("hello from login");
  }

}
