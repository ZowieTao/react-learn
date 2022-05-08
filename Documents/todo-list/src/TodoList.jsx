import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'what\'s up',
      list: ['学习', 'react']
    }
  }
  handleItemDelete(index) {
    const list = [...this.state.list]
    console.log(index);
    list.splice(index, 1)
    this.setState({
      list
    })
  }
  handleInputChange(e) {
    console.log(this);
    console.log(e.target.value);
    // this.state.inputValue = e.target.value  // 无法做到响应式，需要使用setState
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    // this.state.list.push(this.state.inputValue)
    this.setState({
      list: [this.state.inputValue, ...this.state.list]
    })
    // console.log(this.state.list);
  }
  render() {
    return (
      <Fragment>
        {/* 注释  */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input type="text" id='insertArea' value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} className="input" />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem deleteItem={this.handleItemDelete.bind(this)} key={index} content={item} index={index} />
                // <li key={index}
                //   onClick={this.handleItemDelete.bind(this, index)}
                //   dangerouslySetInnerHTML={{ __html: item }}
                // >
                // </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList