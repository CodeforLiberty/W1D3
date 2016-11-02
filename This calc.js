var myCalc = (function() {
    'use strict';
    var _current = 0; //defaults to zero

    var _add = function(val) {
        _current = _current + val;
        
        return this;
      
    };
    var _subtract = function(val) {
        _current = _current-val;
        
        return this;
        
    };
    var _divide = function (val) {
    	_current = _current/val;
    	
    	return this;
    };
    var _multiply = function (val) {
    	_current = _current*val;
    	return this;
    };
    var _clear = function () {
    _current = "C";
    return this;
    };
    var _total = function(val) {
        
        return _current;
    };
   
    return {
        add: _add,
        subtract: _subtract,
        total: _total,
        divide:_divide,
        multiply:_multiply,
        clear:_clear
    };
    }());

console.log(myCalc.add(9).subtract(3).add(4).divide(2)
.multiply(3).clear().total()); 