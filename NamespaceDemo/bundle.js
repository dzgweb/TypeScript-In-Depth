var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log("This is private fn");
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var result = Utility.maxBooksAllowed(15);
console.log(result);
var util = Utility.Fees;
var res = util.calculateLateFee(10);
console.log(res);
