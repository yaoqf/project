import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store';
// import { INPUT_CHANGE, ADD_ITEM } from './store/actionType';
import { inputChangeAction, handleAddAction } from './store/action';
import 'antd/dist/antd.css'

// const data = [
//   '早八点开晨会，分配今天的代码任务',
//   '早九点和项目经理开项目沟通会',
//   '早十点开始写代码',
// ]

class TodoList extends Component {
  constructor(props) {
    console.log(store.getState()) // getState获取store中的state
    super(props);
    this.state = store.getState()
    store.subscribe(this.storeChange) //订阅（监听）Redux的状态
  }

  // 监听store的变化
  storeChange = () => {
    this.setState(store.getState())
  }

  // input改变
  handleInputChange = e => {
    // console.log(e.target.value)
    // 创建一个action
    // const action = {
    //   type: INPUT_CHANGE,
    //   value: e.target.value,
    // }
    console.log(inputChangeAction(e.target.value))
    const action = inputChangeAction(e.target.value)
    store.dispatch(action)
  }

  // 点击添加
  handleAdd = () => {
    const action = handleAddAction();
    store.dispatch(action)
  }

  render() {
    const { list, inputValue } = this.state
    // console.log(this.state)
    return (
      <div style={{ margin: 10 }}>
        <div>
          <Input
            style={{ width: 250, marginRight: 10 }}
            placeholder='place write something'
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <Button type='primary' onClick={this.handleAdd}>增加</Button>
        </div>
        <div style={{ margin: 10, width: 300 }}>
          <List
            bordered
            dataSource={list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          >
          </List>
        </div>
      </div>
    );
  }
}

export default TodoList;