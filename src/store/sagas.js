/*
1. 用saga的中间件业务逻辑，就都写在这个sagas.js文件里，文件里我们用mySaga来作为入口函数。在入口函数中捕获传递过来的action类型，根据类型不同调用不同的方法。
*/
// function* mySaga() { }
// export default mySaga;


import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreatores'
import axios from 'axios'

//generator函数
function* mySaga() {
    //等待捕获action(takeEvery是用来监听用的)
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga;