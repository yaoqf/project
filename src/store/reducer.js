import { INPUT_CHANGE, ADD_ITEM } from './actionType';
// 一些业务逻辑一般会写在reducer中(初始数据)
const defaultState = {
  inputValue: '',
  list: [
    '早八点开晨会，分配今天的代码任务',
    '早九点和项目经理开项目沟通会',
    '早十点开始写代码',
  ]
}
// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
export default (state = defaultState, action) => {
  console.log('state:', state, 'action', action)
  // 输入框改变是将值复制给inputValue
  if (action.type === INPUT_CHANGE) {
    // reducer只能接收state，不能改变state
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState;
  }
  // 点击添加时将输入框的值push到list中
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    if (!newState.inputValue) {
      return state
    }
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    console.log(newState)
    return newState
  }
  return state
}