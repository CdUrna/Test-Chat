import { User } from './user-model';

export class UserMessage implements  User {
  name: string;
  message: string;
  time: Date;

  constructor(name: string, message: string, time: Date) {
    this.name = name;
    this.message = message;
    this.time = time;
  }
}
