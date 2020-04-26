import { createStore } from 'redux'  // 1. 引入createStore方法
// const store = createStore()          // 2. 创建数据存储仓库:使用引入的createStore来创建store
/*
4. 这样虽然已经建立好了仓库，但是这个仓库很混乱，这时候就需要一个有管理能力的模块出现，这就是Reducers。这两个一定要一起创建出来，这样仓库才不会出现互怼现象。在store文件夹下，新建一个文件reducer.js.请看store/reducer.js文件学习。
5.写完store/reducer.js后，这里要将这个文件引入,然后将上面的const store = createStore() 这句话引入reducer,既改为：
const store = createStore(reducer) 
6.然后看store/reducer.js文件:将src/TodoList.js中的List的值和Input的值移到reducer中
*/
import reducer from './reducer'
const store = createStore(reducer)

export default store                 //3. 暴露出去

