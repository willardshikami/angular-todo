  angular.module('todoApp', [])
      .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [
          {text:'learn AngularJS', done:true},
          {text:'build an AngularJS app', done:false}];
     
        todoList.addTodo = function() {
          todoList.todos.push({text:todoList.todoText, done:false});
          todoList.todoText = '';
        };
     
        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
     
        todoList.clearCompleted = function() {
         todoList.todos = _-filter(todoList.todos, function(todos){
           return !todos.done;
         });
        };
      });

