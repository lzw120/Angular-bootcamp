(function(angular) {
  'use strict';

/* The beginning of everything */

// declare a module
var baseModule = angular.module('clari', []);

baseModule.service('TodoModel', ['$http', function($http){
  this.getList = function (callback) {
    $http.get("todo.json")
      .success(function(data){
        callback(data);
      }.bind(this))
      .error(function(data){
        console.log(data);
      }.bind(this));
  }

}]);

baseModule.controller('baseController', ['TodoModel', function(TodoModel){

  this.listFetched = function(list) {
    this.todoList = list;
  };

  TodoModel.getList(this.listFetched.bind(this));

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
