import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-phone-store-home',
  templateUrl: './phone-store-home.component.html',
  styleUrls: ['./phone-store-home.component.less']
})
export class PhoneStoreHomeComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void  {
  }

  notify(){
    this.notificationService.sendMessage("Hello from home");
  }
}
