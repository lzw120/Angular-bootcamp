(function(angular) {
  'use strict';

/* The beginning of everything */

// declare a module
var baseModule = angular.module('clari', []);

baseModule.controller('baseController', function(){
  this.todoList = [
    {
      value: "work to be done"
    },
    {
      value: "test sample here"
    }
  ];

  this.newTodo = null;

  this.addTodo = function() {
    this.todoList.push({
      value: this.newTodo
    });
  };

  return this;
});

/* End of your code.*/

})(window.angular);
