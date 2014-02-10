var ALGO = ALGO || {};
ALGO.sort = ALGO.sort || {};
ALGO.sort.Quicksort = function(array) {
  var qsort = function(a) {
    if (a.length === 0) {
      return [];
    }

    var left = [],
    rigth = [],
    pivot = a[0];

    for (var i = 1; i < a.length; i++) {
      a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
    }

    return qsort(left).concat(pivot, qsort(right));
  };

  return qsort(array);
};
