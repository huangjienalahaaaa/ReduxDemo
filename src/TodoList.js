import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'

//引入actionCreatores.js
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreatores'


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
            <div style={{ margin: '10px' }}>
                <div>

                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }

    changeInputValue(e) {
        // 引入后，可以把changeInputValue()方法，修改为下面的样子.然后对照这个方法修改另外2个方法
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }
        // store.dispatch(action)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        // const action = { type: ADD_ITEM }
        // store.dispatch(action)
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        // const action = {
        //     type: DELETE_ITEM,
        //     index
        // }
        // store.dispatch(action)
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;