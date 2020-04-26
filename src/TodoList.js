import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

//1.引入store
import store from './store/index'  //当然你也可以简写成这样:import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props)
        // 2.引入store后可以试着在构造方法里打印到控制台一下，看看是否真正获得了数据，如果一切正常，是完全可以获取数据的。结果是->可以打印出来的
        console.log(store.getState())
        //3.这时候数据还不能在UI层让组件直接使用，我们可以直接复制给组件的state，代码如下:
        this.state = store.getState();
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    {/* 4.通过上面的步骤，我们从仓库里取出了数据，并用在组件的UI界面上 */}
                    <Input placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px' }} />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        // 4.通过上面的步骤，我们从仓库里取出了数据，并用在组件的UI界面上
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;