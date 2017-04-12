import { FilegenPage } from './app.po';

describe('filegen App', () => {
  let page: FilegenPage;

  beforeEach(() => {
    page = new FilegenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
