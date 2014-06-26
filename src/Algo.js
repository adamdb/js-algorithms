var algo = algo || {};

(function() {
  algo.namespace = function(nsString) {
    var parts = nsString.split('.'),
        parent = algo,
        i;

    if (parts[0] === 'algo') {
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
