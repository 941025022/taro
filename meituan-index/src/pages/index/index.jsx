import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Head from '../../components/head/head'
import Food from '../../components/food/food'
import Bottom from '../../components/bottom/bottom'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Head></Head>
        <Food></Food>
        <Bottom></Bottom>
      </View>
    )
  }
}
