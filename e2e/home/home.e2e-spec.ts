import { HomePage } from './home.po';
import { LoginPage } from '../login/login.po';

describe('rebirth-admin App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new LoginPage().navigateTo().withDefault();
  });

  it('should in home page', () => {
    expect(page.url()).toContain('/manage/home');
  });
});
