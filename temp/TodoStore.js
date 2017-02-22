"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoStore = function () {
  function TodoStore() {
    _classCallCheck(this, TodoStore);

    this.todos = [];
  }

  _createClass(TodoStore, [{
    key: "report",
    value: function report() {
      if (this.todos.length === 0) return "<none>";
      return "Next todo: \"" + this.todos[0].task + "\". " + ("Progress: " + this.completedTodosCount + "/" + this.todos.length);
    }
  }, {
    key: "addTodo",
    value: function addTodo(task) {
      this.todos.push({
        task: task,
        completed: false,
        assignee: null
      });
    }
  }, {
    key: "completedTodosCount",
    get: function get() {
      return this.todos.filter(function (todo) {
        return todo.completed === true;
      }).length;
    }
  }]);

  return TodoStore;
}();

var todoStore = new TodoStore();
todoStore.addTodo("read MobX tutorial");
console.log(todoStore.report());

todoStore.addTodo("try MobX");
console.log(todoStore.report());

todoStore.todos[0].completed = true;
console.log(todoStore.report());

todoStore.todos[1].task = "try MobX in own project";
console.log(todoStore.report());

todoStore.todos[0].task = "grok MobX tutorial";
console.log(todoStore.report());