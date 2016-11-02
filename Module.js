var myCalc = (function() {
    'use strict';
    var _current = 0; //defaults to zero

    return {
        add: function(val) {
            return _current = _current + val;
        },
        total: function(val) {
            return _current;
        },
        subtract: function (val) {
        	return _current = _current-val;
        },
        multiply: function (val) {
        	return _current = _current*val;
        },
        divide: function (val) {
        	return _current = _current/val;
        },
        clear : function () {
        	return "C";
        }
    };
}());

console.log(myCalc.add(5)); // should output ==> 5
console.log(myCalc.subtract(3)); // ==> 2
console.log(myCalc.multiply(5)); // ==> 10
console.log(myCalc.divide(2)); // ==> 5
console.log(myCalc.total()); // ==> 5
console.log(myCalc.clear()); // ==> 0
console.log(myCalc.total()); // ==> 0