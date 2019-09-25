(function(window) {
  'use strict';
  var App = window.App || {};

  // "functions" can be treated as "class instance"
  function DataStore() {
    console.log("Running the DataStore.js");
    this.data = {};
  }

  // prototype is a method that "functions acting as class
  // instances" can use
  // like .add() or like .setAttribute()
  // function(key,val) acts as parameters
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };

  DataStore.prototype.get = function(key) {
    return this.data[key];
  };

  DataStore.prototype.getAll = function() {
    return this.data;
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };





  App.DataStore = DataStore;
  window.App = App;
})(window);
