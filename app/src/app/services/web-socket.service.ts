import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

import { environment } from 'src/environments/environment';

@Injectable()
export class WebSocketService {
  socket;
  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  listen<T>(eventName: string): Observable<T> {
    return new Observable(subscriber => {
      this.socket.on(eventName, data => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }
}
