import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'

// 1. 引入
import { Provider } from 'react-redux'
import store from './store'

// 2. 声明一个App组件，然后这个组件用Provider进行包裹。

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

// 3.写完这个，我们再去浏览器中进行查看，发现代码也是可以完美运行的。需要注意的是，现在还是用传统方法获取的store中的数据。有了Provider再获取数据就没有那么麻烦了。