//promisesexample.js
describe('promises example test', function() {

    it('understanding promises real time', function() {

        browser.ignoreSynchronization = true;

        browser.get('http://www.tizag.com/htmlT/htmlcheckboxes.php');

        for (var i = 1; i <= 4; i++) {

            element(by.xpath('//div[4]/input[' + i + ']')).click();

        }

        browser.sleep(3000);

    });

});