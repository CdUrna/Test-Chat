import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-fields',
  templateUrl: 'chat-fields.component.html',
  styleUrls: ['chat-fields.component.scss']
})
export class ChatFieldsComponent {
  @Input() messages: { time: Date, name: string, message: string }[];
}
