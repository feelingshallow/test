<template>
    <div id="app" ref="refWrapper">
        <component :is="'tick'" class="wrapper" :name="name" :msg="obj" @add="add">

        </component>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { aVue } from "./components";
import  tick from './components/tick.vue'
import modal from "./components/modal.vue";
import watchDemo from "./components/watch-demo.vue";
@Component({
    components: {
        aVue,
        tick,
        modal,
        watchDemo
    },
})
export default class App extends Vue {


    name ='99999'

    obj:any = {}

    resizeObserver:any =null;

    async getDetail() {
        const data =  await Promise.resolve({show:true} )
        setTimeout(()=>{
            this.obj = data
        })
    }

    sendMsg() {
        const dom = document.querySelector('.wrapper')
        this.resizeObserver = new ResizeObserver(entries => {
            console.log(Array.from(entries) )
            for (const entry of entries) {
                const { height } = entry.contentRect;
                window.self !== window.top && top?.postMessage(height,'http://127.0.0.1:5500/')
            }
        });
        this.resizeObserver.observe(dom)

    }

    add(val:any) {
        this.name  = this.name + val
    }

    async created() {
        function foo() {
            window.variable = "potential accidental global";
        } 
        foo();
        await this.getDetail()
        this.$nextTick(()=>{
            this.sendMsg();
        })

    }
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
