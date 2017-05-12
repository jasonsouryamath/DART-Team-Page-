import { DartappPage } from './app.po';

describe('dartapp App', () => {
  let page: DartappPage;

  beforeEach(() => {
    page = new DartappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
