import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./view/TodoList";
import observableTodoStore from "./ObservableTodoStore";

ReactDOM.render(<TodoList store={ observableTodoStore }/>, document.getElementById('root'));