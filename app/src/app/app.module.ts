import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  ListComponent,
  ChatFieldsComponent,
  MessageInputComponent,
  UserComponent
} from './components';
import { WebSocketService } from './services/web-socket.service';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ChatFieldsComponent,
    MessageInputComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [WebSocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
