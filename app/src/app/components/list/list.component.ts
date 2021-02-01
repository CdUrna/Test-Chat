import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() elements: {active: boolean, name: string}[];
  @Output() selectUser = new EventEmitter<string>();
}
