import { RebirthAdminPage } from './app.po';

describe('rebirth-admin App', () => {
  let page: RebirthAdminPage;

  beforeEach(() => {
    page = new RebirthAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
