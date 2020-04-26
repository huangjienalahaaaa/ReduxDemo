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
        //this.绑定
        this.clickBtn = this.clickBtn.bind(this)
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
                    {/* 1.先来编写按钮点击后的响应事件,在按钮的地方加入onClick事件，记得要进行绑定哦 */}
                    <Button
                        type="primary"
                        onClick={this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
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
    // 2.在clickBtn方法里增加Action，然后用dispatch()方法传递给store
    // 3.这时候已经把action传递给了store，然后去Reducer里编写业务逻辑就可以了。
    clickBtn() {
        const action = { type: 'addItem' }
        store.dispatch(action)
    }
}
export default TodoList;