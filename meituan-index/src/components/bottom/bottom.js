import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './bottom.less'
import {getAllFoodInfo, getEvent} from '../../utils/common'
let events = getEvent()
export default class Bottom extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            Num: 1,
            sendPrice: 20, // 配送费
            supportTakeBySelf: false,
            sendMustPrice: 20, //满多少起送
            allPrice: 0
        }
    }
    componentDidMount () {
        // 获取计算好的设置给state
        let {allPrice, allNum} = getAllFoodInfo()
        this.setState({
            Num: allNum,
            allPrice: allPrice
        })
        events.on('addcut', () => {
            let {allPrice, allNum} = getAllFoodInfo()
            this.setState({
                Num: allNum,
                allPrice: allPrice
            })
        })
    }
    render () {
        let {Num, sendPrice, supportTakeBySelf, allPrice, sendMustPrice} = this.state
        return (
        <View className='bottom'>
            <View className='bottom_body'>
                {Num ? <Text className='num'>{Num}</Text> : null}
                <Image className='store_img' src={Num?require('../../assets/img/foodstore.png'):require('../../assets/img/emptystore.png')}></Image>
                <View className='info'>
                    {allPrice
                    ? <Text className="price">{'¥' + allPrice}</Text>
                    : <Text>{sendPrice ? '另需配送费¥' + sendPrice + '|' : ''}</Text>
                    } 
                    <Text>{supportTakeBySelf ? '支持自取' : '不支持自取'}</Text>
                </View>
                <View className='submit'>
                    {allPrice >= sendMustPrice ? <Text className="goPay">去结算</Text> : <Text>{sendPrice ? '¥' + sendPrice + '起送' : ''}</Text>}
                </View>
            </View>
        </View>
        )
    }
}
