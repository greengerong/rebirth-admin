import { MessagePipe } from './message.pipe';

describe('MessagePipe', () => {
  const messageResolver = jasmine.createSpyObj('messageResolver', [
    'getMessage',
  ]);

  it('should get message by resolver', () => {
    const pipe = new MessagePipe(messageResolver);
    const key = 'key';
    const msg = 'message';
    messageResolver.getMessage.and.returnValue(msg);

    expect(pipe.transform(key)).toEqual(msg);
  });

  it('should get empty string when key is empty', () => {
    const pipe = new MessagePipe(messageResolver);
    expect(pipe.transform(null)).toEqual('');
  });
});
