'use strict';

algo.IntToString = function(int) {
  var proto = algo.IntToString.prototype;
  
  this.digits = [];
  this.length = proto.getLength(int);
  
  for (var i = this.length; i > 0; i--) {
    this.length = this.length - 1;

    var base = Math.pow(10, this.length);
    var a = int / base;
    var digit = Math.floor(a);

    this.digits.push(digit);

    int = int - (digit * base);
  }
}

algo.IntToString.prototype.getLength = function(int) {
  var length = 1;

  while(true) {
    if (Math.floor(int / Math.pow(10, length)) === 0) {
      return length;
    }
    else {
      length = length + 1;
    }
  }
}
