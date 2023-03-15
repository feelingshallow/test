import Watcher from "./watcher";

export default class Complier {
    constructor(vm) {
        this.el = vm.$el;
        this.vm = vm ;
        this.methods = vm.$methods;

    }

    compile(vm) {
        let childNodes = this.el.childNodes;
        Array.from(childNodes).forEach((f)=>{
            if(this.isTextNode(f)) {
                this.compileText(f)
            }

            if(this.isElementNode) {
                this.compileElement(f)
            }

            if(f.childNodes?.length) {
                this.compile(f)
            }
        })
    }


    isTextNode(node) {
        return node.nodeType === 3
    }

    isElementNode(node) {
        return node.nodeType === 1
    }

    compileText(node) {
        const reg = /\{\{.*+\}\}/
        let value = node.textContent
        if(reg.test(value)) {
            const key = RegExp.$1.trim()
            node.textContent = value.replace(reg,this.vm[key])

            new Watcher(this.vm,key,(newValue)=>{
                node.textContent = newValue
            })
        }
    }

    compileElement(node){
        if(node.attributes.length) {
            Array.from(node.attributes).map(()=>{
                
            })
        }
    }


}