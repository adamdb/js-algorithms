var ALGO = ALGO || {};

(function() {
  ALGO.namespace = function(nsString) {
    var parts = nsString.split('.'),
        parent = ALGO,
        i;

    if (parts[0] === 'ALGO') {
      parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
      if (typeof parent[parts[i]] === 'undefined') {
        parent[parts[i]] = {};
      }

      parent = parent[parts[i]];
    }

    return parent;
  };
}());
