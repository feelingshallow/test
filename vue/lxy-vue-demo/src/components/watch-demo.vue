<template>
    <div class="main-class">
        <!-- <li v-for="item in arr">
            {{item}}
        </li> -->
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class watchDemo extends Vue {

    arr = [ 1,{a: this.arr}]
    
    get arr() {
        let arr:any[] = [ 1,{a: this.arr}]
        return arr;
    }

    get arrClone() {
        return this.arr
    }

    // @Watch('arr',{deep:true})
    // onarrChange(nv:any) {
    //     console.log(nv);
    // } 
}
</script>
<style lang="less" scoped>
.main-class{
}
</style>