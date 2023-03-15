

/** 发布订阅模式，存储所有观察着 每个watcher 都有 update方法 */
export default class Dep {
    constructor() {
        this.subs = [];
    }
    
    /** 添加观察着 */
    addSub(watcher) {
        if(watcher && watcher.update ) {
            this.subs.push(watcher)
        }
    }
    
    /** 通知watcher 更新 */
    notify() {
        this.subs.forEach((watcher)=>{
             watcher.update()
        })
    }

}