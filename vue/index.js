/**
 * 
 * 手写 observe
 */


/**
 * 监听数组
 */
 let   oldArrayPrototype = Array.prototype;
 let arrProto = Object.create(oldArrayPrototype);
 
 ['push','shift','splice','pop'].forEach(method => {
     arrProto[method] = function() {

        arrProto[method].call(this,...arguments)
     }
 })
 

function observe(obj) {
    if(typeof obj !== 'object'){
        return obj;
    }
    if(Array.isArray(obj)) {
        obj.__proto__ =arrProto;
    }
    
    for(key in obj ) {
        defineReactive(obj,key,obj[key])
    }
}

function defineReactive(obj,key,value){
    observe(value)

    Object.defineProperty(obj,key,{
        get() {
            return value;
        },
        set(newValue){
            observe(newValue)
            console.log('触发监听')
            value = newValue
        }
    })
}




let a= {
    mes:'6666',
    arr:[1]
}
observe(a)
a.arr.push(2)
console.log(a)