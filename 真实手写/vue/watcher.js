import Dep from "./dep";

export default class Watcher {

    constructor(vm,key,callback) {
        this.vm=vm;
        this.key = key;
        this.callback =callback;
        //这里会触发get方法
        Dep.target = this;
        this.oldValue = vm[key]
        Dep.target = null;
    }

    update() {
        let newValue = this.vm[key];
        if(newValue === this.oldValue) {
            return;
        }
        this.callback(newValue)
    }
}
// watcher 初始化获取oldValue触发get 会做一些什么事情