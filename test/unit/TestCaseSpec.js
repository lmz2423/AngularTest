/**
 * Created by creditease on 2015/3/16.
 */
//自定义断言
var customMatchers = {
    toBeGoofy: function (util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                if (expected === undefined) {
                    expected = '';
                }
                var result = {};
                result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);
                if (result.pass) {
                    result.message = "Expected" + actual + " not to be quite so goofy";
                } else {
                    result.message = "Expected" + actual + 'to be goofy, but it was not very goofy';
                }
                return result;
            }
        };
    }
};
describe("A suite", function () {
    beforeEach(function () {
        jasmine.addMatchers(customMatchers);
    });

    //it("is available on an expectation", function () {
    //    expect({hyuk: 'gawrsh'}).toBeGoofy();
    //})

    it("can take an 'expected' parameter", function () {
        expect({hyuk: " gawrsh is fun"}).toBeGoofy(' is fun');
    });

    //it("can be negated", function () {
    //    expect({
    //        hyuk: 'this is fun'
    //    }).not.toBeGoofy();
    //});

    it('reverse word', function () {
        expect('DBCA').toEqual(reverse("ACBD"));
        expect(null).toBeNull();
        expect(true).toBeTruthy();
        expect([1, 2, 3, 4, 5]).toContain(2);
        expect(12).toBeLessThan(34);
        expect(12).toBeGreaterThan(7);
        expect(undefined).toBeUndefined();
        expect('2134567').toMatch(/[0-9]{0,}/);
    });
})
;
