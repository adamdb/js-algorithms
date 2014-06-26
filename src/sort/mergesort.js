algo.namespace('mergesort');

algo.mergesort = (function() {
  var len = a.length - 1,
      n = Math.floor(len / 2),
      left = a.slice(0, n),
      right = a.slice(n, len);

  function sort(a) {
    if (a.length === 1) {
      return a;
    }
    
    left = mergesort(left);
    right = mergesort(right);

    return merge(left, right);
  } 

  function merge(b, c) {
    console.log(b + ' ' + c);
  }

  return {
    sort: sort
  };
}());
