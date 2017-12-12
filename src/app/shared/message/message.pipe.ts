import { Pipe, PipeTransform } from '@angular/core';
import { MessageResolver } from '../../core/message/message-resolver.service';

@Pipe({
  name: 'message',
})
export class MessagePipe implements PipeTransform {
  constructor(private messageResolver: MessageResolver) {}

  transform(value: any, args?: any): any {
    return value ? this.messageResolver.getMessage(value, args) : '';
  }
}
