algo.namespace('Quicksort');

algo.Quicksort = function() {
};

algo.Quicksort.prototype.sort = function(a) {
  var left = [], 
      right = [], 
      pivot = a[0];
    
  if (a.length === 0) {
      return [];
  }

  for (var i = 1; i < a.length; i++) {
    a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
  }

  return this.sort(left).concat(pivot, this.sort(right));
};
