# public 公共资源
# src
## App.css 全局css
## App.js
## index.css 是给整个项目使用的css
## index.js 是整个入口

## 编写细节
### 一个组件的编写必须要有
``` js
import React,{Component} from 'react';

class xxx extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this  )
  }
  render(){
    return (
      <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
    ) 
  }
}
handleClick(index){
  handleItemDelete(index) // 竟然能使用父组件的方法
}

```
父组件向子组件传值中可以不用使用绑定
再react中prop是component中本身具有的属性
都是父组件向子组件传值和方法，不像vue之间的通信设计的比较复杂（目前的理解）

使用redux：
npm i redux
