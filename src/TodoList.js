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
        /*
        6.订阅Redux的状态，如下代码
        7.当然我们现在还没有这个storeChange方法，只要写一下这个方法，并且重新setState一次就可以实现组件也是变化的。在代码的最下方，编写storeChange方法(当然记得要this绑定一下在constructor中)。
        * 注意：去掉
         this.storeChange = this.storeChange.bind(this)向
         store.subscribe(this.storeChange)
         这两句，然后去执行，会发现其实也不会报错。但是这里有一个坑：比如说再Input中加入value值，value值的数值取state中的数值：
            -> 会发现：  在input中输入数值，input中的值是不会发生变化的，但是在浏览器插件中可以看出在state中其实是发生了变化的！！！所以，想要让它变化，就必须有订阅模式
        */
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
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
                        //8.测试订阅模式
                        value={this.state.inputValue}
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
        // console.log(e.target.value)
        /*
         3.想改变Redux里边State的值就要创建Action了。Action就是一个对象，这个对象一般有两个属性，第一个是对Action的描述，第二个是要改变的值。
        4.action就创建好了，但是要通过dispatch()方法传递给store。我们在action下面再加入一句代码：store.dispatch(action)
        5.前面的课程，我已经说了store只是一个仓库，它并没有管理能力，它会把接收到的action自动转发给Reducer->所以接下去，请看reducer.js文件
         */
        const action = {
            type: 'change_input_value', //type:相当于给action起个名字
            value: e.target.value //要改成什么值？就要给它传个值
        }
        store.dispatch(action)
    }
    //8.现在浏览器中预览，可以看到组件和Redux中都同步进行了改变。这节课的内容比较多，把Redux的流程都走了一遍，如果这节课你能独立作下来，也就算Redux入门了。
    storeChange() {
        this.setState(store.getState())
    }
}
export default TodoList;