import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './store/actionTypes'
// 引入getMyListAction
import { getMyListAction, getTodoList, changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreatores'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />

        );
    }
    componentDidMount() {
        // const action = getTodoList()
        // store.dispatch(action)

        /*
         1.现在componentDidMount里边是空的，所以我们要进行redux的基本操作:
            -> 当然可以先引入一个action，当然这个action还没有，我们一会再进行编写，给它起名叫做getMyListAction
        2.完毕之后，到actionCreatores.js文件里把这个action创建出来
        */
        const action = getMyListAction();
        // 3.从actionCreatores.js文件回来之后
        store.dispatch(action)
        console.log(action)

        //4.运行项目进行测试，项目没有报错之后，咋们接下来就得去sagas.js这个文件中写业务逻辑了

    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;