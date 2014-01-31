var TestController = require("montage-testing/test-controller").TestController;

exports.Test = TestController.specialize({
    constructor: {
        value: function splitter() {
            this.super();
        }
    }
});
