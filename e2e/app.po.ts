export class LayoutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('layout-app h1')).getText();
  }
}
