import Dep from "./dep.js";

export default class Observer {
    constructor(data) {
        this.traverser()
    }


    traverser(data) {
        if(!data || typeof data !== 'object') {
            return;
        }
        Object.keys().forEach((f)=>{
            this.defineReactive(data,f,data[f])
        })
    }

    defineReactive(obj,key,value) {
        this.traverser(value)
        const dep = new Dep();

        Object.defineProperty(obj,key,{
            configurable:true,
            enumerable:true,
            get() {
                Dep.target && dep.addSub(Dep.target)
                return value;
            },
            set(newValue) {
                if(newValue === value) {
                    return;
                }
                value = newValue;
                dep.notify()
            }
        })
    }
}