import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  messages = require('./message.json');
  prefix = 'validation';

  getMessage(field: string, key: string, params: { [key: string]: any } = {}) {
    let message = this.messages[`${this.prefix}.${field}.${key}`];
    if (!message) {
      message = this.messages[`${this.prefix}.${key}`];
    }

    return this.formatMessage(message || 'No message config', {
      field,
      key,
      ...params,
    });
  }

  private formatMessage(message: string, params: { [key: string]: any } = {}) {
    const error = Object.keys(params).reduce(
      (msg, key) =>
        msg.replace(new RegExp(`{${key}}`, 'gi'), params[key].toString()),
      message,
    );

    return `${error.substr(0, 1).toUpperCase()}${error.substr(1)}`;
  }
}
