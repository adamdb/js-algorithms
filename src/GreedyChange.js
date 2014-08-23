'use strict'

algo.namespace('GreedyChange');

algo.GreedyChange = (function GreedyChange() {
  var currency = [1, 5, 10, 25],
      coins = [];

  function makeChange(amount) {
    coins = currency.slice();

    return change(amount, []);
  }

  function change(remainder, arr) {
    var c = coins[coins.length - 1];

    if (remainder <= 0) {
      //Return coin array
    }
    else if (remainder < c) {
      coins.pop();
      change(remainder, arr);
    }
    else {
      remainder = remainder - c;
      arr.push(c);
      change(remainder, arr);
    }

    return arr;
  }

  return {
    makeChange: makeChange,
    currency: currency
  }
}());
