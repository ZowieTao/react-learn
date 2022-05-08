import React, { Component, Fragment } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div onClick={this.handleClick}>{this.props.content}  <a>{this.props.index}</a></div>

      </Fragment>
    )
  }
  handleClick(e) {
    console.log(e);
    this.props.deleteItem(this.props.index)
  }
}

export default TodoItem 