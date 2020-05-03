import React, { Component } from 'react';
import store from './store'

//1. 引入连接器
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    render() {
        return (
            <div>
                <div>
                    {/* 改成this.props */}
                    <input value={this.props.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>JSPang</li>
                </ul>
            </div>
        );
    }
}


//3.开始写关系映射关系（将state映射成props）
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

export default connect(stateToProps, null)(TodoList);

// 2. 这时候暴露出去的就变成了connect了，代码如下。
// export default TodoList;
// export default connect(xxx, null)(TodoList);//这里的xxx代表一个映射关系，目前还没有制作这个映射关系。
