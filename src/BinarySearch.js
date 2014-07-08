algo.namespace('BinarySearch');

algo.BinarySearch = function(a) {

  var a = a;

  function rank(key, a, low, high) {
    if (high < low) {
      return -1;
    }

    var mid = Math.floor(low + (high - low) / 2);

    if (key < a[mid]) {
      rank(key, a, low, mid - 1);
    }
    else if (key > a[mid]) {
      rank(key, a, mid + 1, high);
    }
    else {
      return mid;
    }
  }

  function search(key) {
    return rank(key, a, 0, a.length - 1);
  }

  return {
    search: search
  }
};
