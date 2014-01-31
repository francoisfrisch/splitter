var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("splitter-test", function(testPage) {

    describe("test/ui/splitter/splitter-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Splitter", function() {
            it("can be created", function() {
                expect(testPage.test.splitter).toBeDefined();
            });
        });
    });
});
