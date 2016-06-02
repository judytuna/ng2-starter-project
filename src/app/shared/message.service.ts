import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  private message = 'Hello Message';
  unicorn: string = 'Here is a unicorn 🦄';

  getMessage(): string {
    return this.message;
  };

  setMessage(newMessage: string): void {
    this.message = newMessage;
  };
}
