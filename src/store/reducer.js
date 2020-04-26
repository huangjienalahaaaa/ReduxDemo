// const defaultState = {}  //默认数据
const defaultState = { //将src/ TodoList.js中的List的值和Input的值移到reducer中
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState, action) => {  //就是一个方法函数
    return state //因为reducer是管理state的，所以要返回state
}