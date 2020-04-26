import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'



class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.clickBtn = this.clickBtn.bind(this)
        // 2.this指向
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
                    {/* 1.写onclick绑定事件 */}
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
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = { type: 'addItem' }
        store.dispatch(action)
    }
    deleteItem(index) {
        //3.编写action,并且传给store
        const action = {
            type: 'deleteItem',
            index
        }
        store.dispatch(action)
    }
}
}
export default TodoList;