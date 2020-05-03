import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
// 1. 引入axios
import axios from 'axios'
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})
// 2. 写一个新的函数方法。（以前的action是对象，现在的action可以是函数了，这就是redux-thunk带来的好处）.写完之后看TodoList.js
// export const getTodoList = () => {
//     return () => {
//         axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
//             const data = res.data
//             console.log(data)
//         })
//     }
// }

// 3.回到这个文件中后，我们继续走以前的Redux流程就可以了。将上面的改为下面的样子（这个函数可以直接传递dispatch进去，这是自动的，然后我们直接用dispatch(action)传递就好了。现在我们就可以打开浏览器进行测试了。）：
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
            const data = res.data
            const action = getListAction(data)
            dispatch(action)

        })
    }
}