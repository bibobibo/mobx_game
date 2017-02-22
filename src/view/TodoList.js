import React from "react";
import {observable, computed, autorun} from "mobx";
import {observer} from "mobx-react";
import TodoView from './TodoView';

@observer
class TodoList extends React.Component {
  render() {
    const store = this.props.store;
    return (
        <div>
          { store.report }
          <ul>
            { store.todos.map(
                (todo, idx) => <TodoView todo={ todo } key={ idx } />
            ) }
          </ul>
          <button onClick={ this.onNewTodo }>New Todo</button>
          <small> (double-click a todo to edit)</small>
        </div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}

export default TodoList;
