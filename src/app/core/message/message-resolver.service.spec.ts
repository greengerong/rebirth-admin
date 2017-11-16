import { inject } from '@angular/core/testing';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';
import { MessageResolver } from './message-resolver.service';

describe('MessageResolver', () => {
  beforeEach(() => {
    TestBedUtils.configureTestingModule({
      providers: [MessageResolver],
    });
  });

  it(
    'should get message by message key',
    inject([MessageResolver], (service: MessageResolver) => {
      const message = service.getMessage('validation.required', {
        label: 'name',
      });
      expect(message).toEqual('Name为必填字段');
    }),
  );

  it(
    'should get validation message by field & validation key',
    inject([MessageResolver], (service: MessageResolver) => {
      const message = service.getValidationMessage('name', 'required');
      expect(message).toEqual('Name为必填字段');
    }),
  );

  it(
    'should get message by message key with label params',
    inject([MessageResolver], (service: MessageResolver) => {
      const message = service.getValidationMessage('name', 'required', {
        label: '姓名',
      });
      expect(message).toEqual('姓名为必填字段');
    }),
  );
});
