"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TodoList = require("./view/TodoList");

var _TodoList2 = _interopRequireDefault(_TodoList);

var _ObservableTodoStore = require("./ObservableTodoStore");

var _ObservableTodoStore2 = _interopRequireDefault(_ObservableTodoStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_TodoList2.default, { store: _ObservableTodoStore2.default }), document.getElementById('root'));