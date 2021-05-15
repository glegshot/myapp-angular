import { Injectable } from '@angular/core';
import { from, Observable, of, pipe, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  messages: string[] = [];
  messagesSubject : Subject<string>;

  constructor() {
    this.messagesSubject = new Subject<string>();
  }

  getMessage(): Observable<string>{
    return this.messagesSubject;
  }

  sendMessage(message: string){
    this.messages.push(message);
    this.messagesSubject.next(message);
  }

  

}
