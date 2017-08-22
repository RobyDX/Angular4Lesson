import { AngularTutorialPage } from './app.po';

describe('angular-tutorial App', () => {
  let page: AngularTutorialPage;

  beforeEach(() => {
    page = new AngularTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
