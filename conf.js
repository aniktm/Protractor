//conf.js
exports.config = {

    //directConnect = true,

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']

}