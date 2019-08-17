//spec.js
describe('Demo suite', function() {

    it('should have a title', function() {

        browser.get('https://www.protractortest.org');

        console.log("starting to check title");

        browser.getTitle().then(function(title) {
            console.log(title);
        });

    });


    it('test name input in text box', function() {

        browser.get('https://angularjs.org/');

        console.log("starting to update name");

        var input = element(by.model('yourName'));
        input.sendKeys('Joy');

        expect(input.getAttribute('value')).toBe('Joy')
        browser.sleep(2000);

        console.log("Name updated successfully");
    })
});