import { Injectable } from '@angular/core';

@Injectable()
export class MessageResolver {
  messages = require('./message.json');
  validationPrefix = 'validation';

  getValidationMessage(
    field: string,
    key: string,
    params: { [key: string]: any } = {},
  ) {
    const msgParams = {
      field,
      key,
      ...params,
    };

    let message = this.getMessage(
      `${this.validationPrefix}.${field}.${key}`,
      msgParams,
    );
    if (!message) {
      message = this.getMessage(`${this.validationPrefix}.${key}`, msgParams);
    }

    return message;
  }

  getMessage(msgKey: string, params: { [key: string]: any } = {}) {
    const message = this.messages[msgKey];
    return message ? this.formatMessage(message, params) : '';
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
