import { GoldenrelationsPage } from './app.po';

describe('goldenrelations App', function() {
  let page: GoldenrelationsPage;

  beforeEach(() => {
    page = new GoldenrelationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gr works!');
  });
});
