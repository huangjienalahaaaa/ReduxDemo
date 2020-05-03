const defalutState = {
    inputValue: 'jspang',
    list: []
}
export default (state = defalutState, action) => {
    //写对应的业务逻辑
    if (action.type === 'change_input') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}