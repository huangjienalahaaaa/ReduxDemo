import { createStore } from 'redux'

import reducer from './reducer'
//添加调试工具-> AA && BB():意思是，有没有AA，有的话就调用BB这个方法
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

