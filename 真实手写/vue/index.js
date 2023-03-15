import { Vue } from "./vue.js";

let vm = new Vue({
    el: '#app',
    data:{
        message :'3344',
    },
    methods:{
        sayHello() {
            console.log('hello')
        }
    }
})

console.log(vm)   