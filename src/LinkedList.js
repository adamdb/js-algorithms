algo.namespace('LinkedList');

algo.LinkedList = function() {
  this.first = null;
};

algo.LinkedList.prototype.Node = function() {
  var item,
      next;

  return {
    item: item,
    next: next
  };
};

algo.LinkedList.prototype.isEmpty = function() {
  return this.first === null;
};

algo.LinkedList.prototype.push = function(item) {
  var oldfirst = this.first;
  this.first = new this.Node();
  this.first.item = item;
  this.first.next = oldfirst;
};

algo.LinkedList.prototype.pop = function() {
  var item = this.first.item;
  this.first = this.first.next;
  
  return item;
};
