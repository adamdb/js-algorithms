ALGO.namespace('sort.Quicksort');

ALGO.sort.Quicksort = (function() {
  var sort = function(a) {
    if (a.length === 0) {
      return [];
    }

    var left = [], right = [], pivot = a[0];

    for (var i = 1; i < a.length; i++) {
      a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
    }

    return sort(left).concat(pivot, sort(right));
  };

  return {
    sort: sort
  };
}());
