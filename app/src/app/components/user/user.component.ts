import { Component } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent {
  nickNameControl = new FormControl('', [Validators.required, this.nickNameValidator]);
  nickname: string;

  private nickNameValidator(control: AbstractControl): {name: string} | null {
    return !control.value ? { name: 'Invalid nickname' } : null;
  }
}
