import { HttpParams, HttpRequest } from '@angular/common/http';

function isUndefined(value) {
  return typeof value === 'undefined';
}

export function loading(open = true) {
  return function(target: any, propertyKey: string, descriptor: any) {
    const options: any = descriptor.requestOptions || {};
    if (!open) {
      options.params = (options.params || new HttpParams()).append(
        'polling',
        'true',
      );
    }
    options.observe = options.observe || 'body';
    options.reportProgress = isUndefined(options.reportProgress)
      ? false
      : options.reportProgress;
    options.responseType = options.responseType || 'json';
    options.withCredentials = isUndefined(options.withCredentials)
      ? false
      : options.withCredentials;

    descriptor.requestOptions = options;
    return descriptor;
  };
}

export function ignoreLoading(request: HttpRequest<any>) {
  return request.params ? request.params.get('polling') : false;
}
