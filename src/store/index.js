/*
 *@description:创建store三部
 *@date: 2019-09-03 23:38:36
*/
// 整个项目的store
/**
 * 1.使用redux需要先下载：npm install --save redux
 * 2.src文件夹下创建store文件夹，store下的index就是整个项目的store
 *   2.1 引入createStore方法 import reducer from './reducer'
 *   2.2 用createStore方法去创建一个数据存储的仓库 const store = createStore()  
 *   2.3 将创建的store暴露出去 export default store
 * 3.建立好了仓库，但是这个仓库很混乱.这时候就需要一个有管理能力的模块出现，这就是Reducers。
 *   store文件夹下，新建一个文件reducer.js，去管理store
 * 4.reducer建立好了，把reducer引入到store中,在创建store时，以参数的形式传递给store。
 */
// store只是一个仓库，它并没有管理能力，它会把接收到的action自动转发给Reducer。我们现在先直接在Reducer中打印出结果看一下。打开store文件夹下面的reducer.js文件，修改代码。


import reducer from './reducer'; // 引入仓库管理reducer
import { createStore } from 'redux'  // 引入创建store的方法

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) // 创建一个仓库

export default store // 把仓库暴露出去