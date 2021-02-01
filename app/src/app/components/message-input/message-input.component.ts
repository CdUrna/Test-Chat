import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: 'message-input.component.html',
  styleUrls: ['message-input.component.scss']
})
export class MessageInputComponent {
  @Output() messageApply = new EventEmitter<string>();
  @Input() set selectedUserName(userName) {
    if (userName) {
      const prefix = `@<${userName}>`;
      if (this.message && this.message.search(prefix)) {
        this.message = this.message.replace(prefix, '');
      }
      this.message = `${prefix} ${this.message ? this.message : ''}`;
    }
  }

  message: string;

  onSend(): void {
    this.messageApply.emit(this.message);
  }
}

