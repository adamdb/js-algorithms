algo.namespace('Quickfind');

algo.Quickfind = function(n) {
  this.id = [];

  for (var i = 0; i < n; i++) {
    this.id[i] = i;
  }
};

algo.Quickfind.prototype.find = function(p) {
  return this.id[p]; 
};

algo.Quickfind.prototype.union = function(p, q) {
  var pID = this.find(p),
      qID = this.find(q);

  if (pID === qID) {
    return;
  }

  for (var i = 0; i < this.id.length; i++) {
    if (this.id[i] === pID) {
      this.id[i] = qID;
    }
  }
};
