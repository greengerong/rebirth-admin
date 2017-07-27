import { Injectable } from '@angular/core';
import { StorageService, StorageType } from 'rebirth-storage';

@Injectable()
export class ReStorageService {

  static STORAGE_VALUE_KEY = 'value';

  constructor(private storageService: StorageService) {
    this.storageService.setDefaultStorageType(StorageType.sessionStorage);
  }

  save(key: string, value: string) {
    return this.storageService.put({ pool: key, key: ReStorageService.STORAGE_VALUE_KEY }, value);
  }

  get(key: string) {
    return this.storageService.get({ pool: key, key: ReStorageService.STORAGE_VALUE_KEY });
  }

  remove(key: string) {
    return this.storageService.remove({ pool: key, key: ReStorageService.STORAGE_VALUE_KEY });
  }

  clear() {
    return this.storageService.removeAll({});
  }

}
