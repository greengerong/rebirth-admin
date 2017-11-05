import { Injectable } from '@angular/core';

@Injectable()
export class GuidService {
  uid = 0;

  newId() {
    const now = new Date();
    const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    return utc.getTime().toString() + (this.uid++);
  }

}
