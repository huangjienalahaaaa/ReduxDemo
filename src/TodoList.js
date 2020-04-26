import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'



class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        //修改this的指向
        this.changeInputValue = this.changeInputValue.bind(this)
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    {/* 1.增加Input响应事件：如果想Input改变，redux也跟着改变，需要在Input组件上增加onChange响应事件，如下 
                            2.写完这一步，还要记得在constructor进行this的绑定，修改this的指向。
                    */}
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                    />
                    <Button type="primary">增加</Button>
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
        console.log(e.target.value)
    }
}
export default TodoList;