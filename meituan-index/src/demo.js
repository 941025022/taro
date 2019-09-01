import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
export default class FoodList extends Component {
    constructor () {
        super(...arguments)
        this.state = {}
    }
    render () {
        return (
        <View className='index'>
            FoodList
        </View>
        )
    }
}
