import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    {/* 3.在这里调用dispatchToProps中的方法 */}
                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>JSPang</li>
                </ul>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

/* 1.要使用react-redux，我们可以编写另一个映射DispatchToProps:先看connect，你会发现有两个参数，第二个参数我们用的是null。
   2. DispatchToProps就是要传递的第二个参数
*/
// export default connect(stateToProps, null)(TodoList);
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            //派发到action中。派发后就需求在reducer里边，编写对应的业务逻辑了。
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList);