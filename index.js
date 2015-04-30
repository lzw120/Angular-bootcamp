(function(angular) {
  'use strict';

/* The beginning of everything */

// declare a module
var baseModule = angular.module('clari', []);

baseModule.service('TodoModel', function(){
  this.todoList = [
    {
      value: "work to be done"
    },
    {
      value: "test sample here"
    }
  ];
  this.getList = function () {
    return this.todoList;
  }
});

baseModule.controller('baseController', ['$scope', 'TodoModel', function($scope, TodoModel){
  this.todoList = TodoModel.getList();

  this.newTodo = null;

  this.addTodo = function() {
    this.todoList.push({
      value: this.newTodo
    });
  };

  return this;
}]);

/* End of your code.*/

})(window.angular);
