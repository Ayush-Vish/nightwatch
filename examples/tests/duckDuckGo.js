describe('duckduckgo example', function() {

  this.tags = ['end-to-end'];

  it('Search Nightwatch.js and check results', async function(browser) {
    browser
      .navigateTo('https://duckduckgo.com')
      .waitForElementVisible('body')
      .assert.visible('input[name="q"]')
      .sendKeys('input[name="q"]', ['Nightwatch.js'])
      .assert.visible('button[type=submit]')
      .click('button[type=submit]');
    const result =  await browser.element('#header').isVisible();
  });
});
