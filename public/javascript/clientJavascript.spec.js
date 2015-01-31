
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

});

//describe('testing calculateGPA', function(){
//    it('should return the correct GPA for all "A"', function(){
//        expect(calculateGPA("A", 4, "A", 4, "A", 4)).toEqual(4.0);
//    });
//
//    it('should return the correct GPA for lowercase letter grades', function(){
//        expect(calculateGPA("a", 4, "a", 4, "a", 4)).toEqual(4.0);
//    });
//
//    it('should return a GPA of 0.0', function(){
//        expect(calculateGPA("F", 4, "F", 4, "F", 4)).toEqual(0.0);
//    });
//
//    it('should return the correct GPA when averaging grades', function(){
//        expect(calculateGPA("c", 2, "c", 4, "D", 4)).toEqual(1.6);
//    });
//
//    it('should return the correct GPA when averaging grades', function(){
//        expect(calculateGPA("c", "2", "c", "4", "D", "4")).toEqual(1.6);
//    });
//});

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
});