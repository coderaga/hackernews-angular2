import { HackernewsAngular2Page } from './app.po';

describe('hackernews-angular2 App', function() {
  let page: HackernewsAngular2Page;

  beforeEach(() => {
    page = new HackernewsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hn works!');
  });
});
