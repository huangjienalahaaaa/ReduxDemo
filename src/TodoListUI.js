// import React, { Component } from 'react';
// 1.因为是用无状态组件，所以不需要引入Conpoent
import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// 2.写无状态组件
//3. 因为是普通的函数，不再是继承类了，所以这里要将props传入，下面的this.props.***要改为 props.***
const TodoListUi = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    style={{ width: '250px', marginRight: '10px' }}

                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item, index) => (
                            <List.Item onClick={() => { props.deleteItem(index) }}>
                                {item}
                            </List.Item>
                        )
                    }
                />
            </div>
        </div>
    )
}

// class TodoListUi extends Component {
//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         style={{ width: '250px', marginRight: '10px' }}
//                         onChange={this.props.changeInputValue}
//                         value={this.props.inputValue}
//                     />
//                     <Button
//                         type="primary"
//                         onClick={this.props.clickBtn}
//                     >增加</Button>
//                 </div>
//                 <div style={{ margin: '10px', width: '300px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.deleteItem(index) }}>{item}</List.Item>)}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

export default TodoListUi;