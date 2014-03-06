ALGO.namespace('sort.Mergesort');

ALGO.sort.Mergesort = (function() {
  var mergesort = function(a) {
    if (a.length === 1) {
      return a;
    }

    var len = a.length - 1,
        n = Math.floor(len / 2),
        left = a.slice(0, n),
        right = a.slice(n, len);
    
    left = mergesort(left);
    right = mergesort(right);

    return merge(left, right);
  },  

      merge = function(b, c) {
        console.log(b + ' ' + c);
      };

  return {
    mergesort: mergesort
  };
}());
