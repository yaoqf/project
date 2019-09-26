import { INPUT_CHANGE, ADD_ITEM } from './actionType';

// antion创建函数只是简单的返回一个action
// 调用action函数时，一般会触发一个dispatch
export const inputChangeAction = value => ({
  type: INPUT_CHANGE,
  value,
})

export const handleAddAction = value => ({
  type: ADD_ITEM,
  value,
})