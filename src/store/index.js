
import reducer from './reducer'

// import { createStore } from 'redux'

//1.引入applyMiddleware:如果你要使用中间件，就必须在redux中引入applyMiddleware.并且引入增强函数compose
import { createStore, applyMiddleware, compose } from 'redux'
// 2.引入redux - thunk库
import thunk from 'redux-thunk'
/*
    3.然后在下面createStore中配置redux-thunk。
    注意：如果你按照官方文档来写，你直接把thunk放到createStore里的第二个参数就可以了，但以前我们配置了Redux Dev Tools，已经占用了第二个参数。
    -> 官方文档给的方法:
        const store = createStore(
            reducer,
            applyMiddleware(thunk)
        ) // 创建数据存储仓库
    这样写是完全没有问题的，但是我们的Redux Dev Tools插件就不能使用了，如果想两个同时使用，需要使用增强函数:
    * 使用增加函数前需要先引入compose。
 */

// 然后利用compose创造一个增强函数，就相当于建立了一个链式函数，代码如下:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

// 4.有了增强函数后，就可以把thunk加入进来了，这样两个函数就都会执行了。
const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// 5.上面的createStore要改为：
const store = createStore(reducer, enhancer)
export default store

