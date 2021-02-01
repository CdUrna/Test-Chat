import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WebSocketService } from './web-socket.service';
import { User, UserMessage } from 'src/app/models';

@Injectable()
export class ChatService {
  constructor(private webSocketService: WebSocketService) {
  }

  connect(): Observable<{[id: string]: User}> {
    return this.webSocketService.listen<{[id: string]: User}>('get-users');
  }

  addNewUser(userName: string): void {
    this.webSocketService.emit('join', userName);
  }

  sendMessage(message: UserMessage): void {
    this.webSocketService.emit('send-message', message);
  }

  listenMessages(): Observable<UserMessage> {
    return this.webSocketService.listen<UserMessage>('chat-message');
  }
}
