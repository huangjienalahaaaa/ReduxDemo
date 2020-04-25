import React from 'react';
import ReactDOM from 'react-dom';
// 引入TodoList组件
import TodoList from './TodoList'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
