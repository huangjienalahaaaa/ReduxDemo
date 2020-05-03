import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

// 1. 引入redux-saga,并创建一个sagaMiddleware
import createSagaMiddleware from 'redux-saga'   //引入saga

// 4.写完sagas.js之后，将文件引入到这里：
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware();   //创建saga中间件



// 2.创建好后，还是用Redux的增强函数进行传递。也就是把原来的Redux-thunk替换成saga中间件（注意去掉原来不用的redux-thunk引入）。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))


const store = createStore(reducer, enhancer)// 创建数据存储仓库


// 5.然后执行run方法，让saga运行起来。
sagaMiddleware.run(mySagas)


export default store //暴露出去



/*
3. 这步完成后，就把原来的redux-thunk替换成redux-saga了，当然，现在我们还不能使用，我们还需要继续配置sagas.js文件:

  * 创建sagas.js文件并引入：
        -> redux-saga希望你把业务逻辑单独写一个文件，这里我们在/src/store/文件夹下建立一个sagas.js文件。
*/

