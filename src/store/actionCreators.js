//1.引入actionType
import { CHANGE_INPUT } from './actionTypes'

//编写action,这里用const声明一个changeInputAction变量。然后在TodoLisit.js文件中引入
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
