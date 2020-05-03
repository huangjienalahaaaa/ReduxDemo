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
                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                    {/* 给Button增加一个onClick事件 */}
                    <button onClick={this.props.clickButton}>提交</button>
                </div>
                <ul>
                    {

                        // 点击按钮后传递回来的数据循环出来
                        this.props.list.map((item, index) => {
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        // 点击按钮后传递回来的数据接收好
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton() {
            // dispatch派发action
            let action = { type: 'add_item' }
            dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList);