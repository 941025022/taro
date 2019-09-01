import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '解放碑智慧商圈'
  }

  componentWillMount () {
    console.log('componentWillMount')
   }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    console.log(this)
  }

  componentWillUnmount () { 
    console.log('componentWillUnmount')
  }

  componentDidShow () {
    console.log('componentDidShow')
   }

  componentDidHide () {
    console.log('componentDidHide')
   }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        {/* 头部搜索框 */}
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default Index 
