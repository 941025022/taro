import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
import FoodList from './foodList'
import './food.less'
export default class Food extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
            tabList: [
                {
                    title: '点菜'
                },
                {
                    title: '评价'
                },
                {
                    title: '商家'
                }
            ],
            foodList: [],
            currentList: []
        }
    }
    changeTab (value) {
        this.setState({
            current: value
        })
    }
    changeCata (selectCata) {
        if (this.state.foodList.some(item => item.pid == selectCata.id)) {
            // 不用加载数据，已存在数据
            this.setState({
                currentList: this.state.foodList.filter(item => item.pid == selectCata.id)
            })
        } else {
            // 需要加载数据
            this.setState({
                foodList: this.state.foodList.concat(this.getData(selectCata))
            }, () => {
                this.setState({
                    currentList: this.state.foodList.filter(item => item.pid == selectCata.id)
                })
            })
        }
    }
    getData (selectCata) {
        let count = Math.round(Math.random() * 2)
        let imgurl = `../../assets/img/${count}.jpg`
        return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
            title: '分类' + selectCata.id + '菜品' + (k + 1),
            id: selectCata.id + '_' + k,
            pid: selectCata.id,
            img: imgurl,
            sole: Math.round(Math.random() * 50),
            price: Math.round(Math.random() * 20)
        }))
    }
    render () {
        let {current, tabList, currentList} = this.state
        return (
        <View className='index'>
            <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={tabList}>
                <AtTabsPane>
                    <View className="food_body">
                        <Cata onChangeCata={this.changeCata.bind(this)}></Cata>
                        <FoodList currentList={currentList}></FoodList>
                    </View>
                </AtTabsPane>
                <AtTabsPane>评价</AtTabsPane>
                <AtTabsPane>商家</AtTabsPane>
            </AtTabs>
        </View>
        )
    }
}
