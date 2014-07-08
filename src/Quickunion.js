algo.namespace('Quickunion');

algo.Quickunion = function(n) {
  this.count = n;
  this.id = [];
  this.sz = [];

  for (var i = 0; i < n; i++) {
    this.id[i] = i;
    this.sz[i] = 1;
  }
};

algo.Quickunion.prototype.count = function() {
  return this.count;
};

algo.Quickunion.prototype.connected = function(p, q) {
  return (this.find(p) === this.find(q));
};

algo.Quickunion.prototype.find = function(p) {
  while (p !== this.id[p]) {
    p = this.id[p];
  }

  return p;
};

algo.Quickunion.prototype.union = function(p, q) {
  var i = this.find(p),
      j = this.find(q);

  if (i === j) {
    return;
  }

  if (this.sz[i] < this.sz[j]) {
    this.id[i] = j;
    this.sz[j] += this.sz[i];
  }
  else {
    this.id[j] = i;
    this.sz[i] += this.sz[j];
  }

  this.count--;
};
