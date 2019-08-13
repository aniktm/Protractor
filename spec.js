//spec.js
describe('Demo suite', function() {

    it('should have a title', function() {

        browser.get('https://www.protractortest.org');
        expect(browser.getTitle()).toContain('Protractor')
        browser.sleep(5000);
    });

    it('test name input in text box', function() {

        browser.get('https://angularjs.org/');
        var input = element(by.model('yourName'));
        input.sendKeys('Joy');

        expect(input.getAttribute('value')).toBe('Joy')
        browser.sleep(5000);
    })
});