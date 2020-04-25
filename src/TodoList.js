import React, { Component } from 'react';
//1.引入antd的css样式：
import 'antd/dist/antd.css'
//2.引入CSS样式之后，可以快乐的使用antd里的组件了。在使用的时候，你需要先引入Input,Button,List组件.然后如下面
import { Input, Button, List } from 'antd'


// 5.同样用Ant Desgin制作todoList的列表，在制作前，我们先在class外部声明一个data数组，数组内容可以随便写。
const data = [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>
                    {/* 3.使用Input标签。在Input组件里，我们设置了style，注意设置这个时不带单引号或者双引号的。 */}
                    <Input placeholder='jspang' style={{ width: '250px' }} />
                    {/* 4.Ant Design也提供了丰富好看的按钮组件，直接使用最简单的Primary按钮。使用按钮组件前也需要先引入,为了让组件更好看，还加入了一些Margin样式，代码如下: */}
                    <Button type="primary">增加</Button>
                </div>
                {/* 6.使用List标签 */}
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;