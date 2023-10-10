import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/* The service exposes its cache of messages and two methods:*/
export class MessageService {
  messages: string[] = [];

  /* 1. Add a message to the cache*/
  add(message: string) {
    this.messages.push(message);
  }
  
  /* 2. Clear the cache*/
  clear() {
    this.messages = [];
  }
}
