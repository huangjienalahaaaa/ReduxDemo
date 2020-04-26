const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
/*
1. 下面的2个参数state和action:
    * state: 指的是原始仓库里的状态。
    * action: 指的是action新传递的状态。  
2. 通过打印你可以知道，Reducer已经拿到了原来的数据和新传递过来的数据。
    现在要作的就是改变store里的值。我们先判断type是不是正确的：
    如果正确，我们需要从新声明一个变量newState。（记住：Reducer里只能接收state，不能改变state。）,所以我们声明了一个新变量，然后再次用return返回回去。
3.现在store里的数据已经更新了，但是组件还没有进行更新，我们需要打开组件文件TodoList.js，在constructor，写入下面的代码:
    -> store.subscribe(this.storeChange) //订阅Redux的状态
    */
export default (state = defaultState, action) => {
    // console.log(state, action)
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    return state
}