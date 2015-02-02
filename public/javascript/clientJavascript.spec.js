
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

});

describe('testing letterToNum', function() {
    it('should return 4.0 for A', function () {
        expect(letterToNum("A")).toEqual(4.0);
        expect(letterToNum("a")).toEqual(4.0);
    });

    it('should return 3.0 for B', function () {
        expect(letterToNum("B")).toEqual(3.0);
        expect(letterToNum("b")).toEqual(3.0);
    });

    it('should return 2.0 for C', function () {
        expect(letterToNum("C")).toEqual(2.0);
        expect(letterToNum("c")).toEqual(2.0);
    });

    it('should return 1.0 for D', function () {
        expect(letterToNum("D")).toEqual(1.0);
        expect(letterToNum("d")).toEqual(1.0);
    });

    it('should return 0.0 for D', function () {
        expect(letterToNum("F")).toEqual(0.0);
        expect(letterToNum("f")).toEqual(0.0);
    });
});