//spec.js
/* describe('Demo suite', function() {

    it('should have a title', function() {

        browser.get('https://www.protractortest.org');
        expect(browser.get.title()).toContain('Protractor')
    });
}); */

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});