import { ignoreLoading, loading } from './loading';
import { HttpParams } from '@angular/common/http';

describe('loading', () => {
  it('should ignore loading when polling', () => {
    const descriptor: any = {};
    loading(false)(null, null, descriptor);
    expect(descriptor.requestOptions.params.get('polling')).toBeTruthy();
  });

  it('should show loading when not polling', () => {
    const descriptor: any = {};
    loading()(null, null, descriptor);
    expect(descriptor.requestOptions.params).not.toBeDefined();
  });

  it('should show loading with default option when not polling', () => {
    const descriptor: any = {
      requestOptions: {
        observe: 'response',
        reportProgress: true,
        responseType: 'blob',
        withCredentials: true,
      },
    };

    loading(true)(null, null, descriptor);

    expect(descriptor.requestOptions.params).not.toBeDefined();
    expect(descriptor.requestOptions.observe).toEqual('response');
    expect(descriptor.requestOptions.responseType).toEqual('blob');
    expect(descriptor.requestOptions.withCredentials).toBeTruthy();
  });

  it('should return true when request params with polling', () => {
    expect(
      ignoreLoading({
        params: new HttpParams().append('polling', 'true'),
      } as any),
    ).toBeTruthy();
  });

  it('should return false when no request params', () => {
    expect(ignoreLoading({} as any)).toBeFalsy();
  });

  it('should return false when request params without polling', () => {
    expect(ignoreLoading({ params: new HttpParams() } as any)).toBeFalsy();
  });
});
