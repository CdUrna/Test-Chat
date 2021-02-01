import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { UserComponent } from './components';
import { User, UserMessage } from './models';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  users: { name: string; active: boolean }[] = [];
  messages: UserMessage[] = [];
  selectedUserName: string;

  get activeUser(): { name: string; active: boolean } {
    return this.users.find(user => user.active);
  }

  constructor(
    private chatService: ChatService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.openUserDialog();
    this.subscriptions.add(this.chatService.connect().subscribe(users => this.setUsers(users)));
    this.subscriptions.add(this.chatService.listenMessages().subscribe(message => this.messages.push(message)));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  sendMessage(message: string): void {
    this.chatService.sendMessage(new UserMessage(this.activeUser.name, message, new Date()));
  }

  onSelectUserName(userName: string): void {
    this.selectedUserName = userName;
  }

  private setUsers(users: {[id: string]: User}): void {
    const activeUser = this.activeUser;
    this.users = Object.keys(users).map(id => {
      return { name: users[id].name, active: activeUser && activeUser.name === users[id].name };
    });
  }

  private openUserDialog(): void {
    const dialogRef = this.dialog.open(
      UserComponent,
      { width: '300px', disableClose: true }
      );

    dialogRef.afterClosed().subscribe(userName => {
      this.users.forEach(user => user.active = false);
      this.users.push({ name: userName, active: true });

      this.chatService.addNewUser(userName);
    });
  }
}
