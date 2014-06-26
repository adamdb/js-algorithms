algo.namespace('quicksort');

algo.quicksort = (function() {
  function sort(a) {
    var left = [], right = [], pivot = a[0];
    
    if (a.length === 0) {
      return [];
    }

    for (var i = 1; i < a.length; i++) {
      a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
    }

    return sort(left).concat(pivot, sort(right));
  }

  return {
    sort: sort
  };
}());
