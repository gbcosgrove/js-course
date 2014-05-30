// var extend = function(ChildClass,ParentClass) {
//   ChildClass.prototype = new ParentClass ();
//   ChildClass.prototype.constructor = ChildClass;
// };

var extend = function (destination, source) {
  for (var property in source) {
    destination[property] = source[property];
  }
  return destination;
};

// Should add properties from one object to another object
// Should return the destination object
// Should not set the source and destination object to equal each other
// Should not add any additional properties to the source or destination
