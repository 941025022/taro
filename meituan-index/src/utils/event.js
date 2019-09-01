class Event {
    constructor () {
        this.events = {}
    }
    on (eventName, callBack) {
        if (this.events[eventName]) {
            // 存在事件
            this.events[eventName].push(callBack)
        } else {
            // 不存在事件
            this.events[eventName] = [callBack]
        }
    }
    emit (eventName, params) {
        if (this.events[eventName]) {
            // 存在事件
            this.events[eventName].map((callBack) => {
                callBack(params)
            })
        }
    }
}
export default Event