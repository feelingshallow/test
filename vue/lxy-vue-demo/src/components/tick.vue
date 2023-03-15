<template>
    <div class="main-class">
        <!-- <input type="text" v-model="currentValue"> -->
        <div> {{ name }}</div>
        <button @click="onClick">添加</button>

        <div class="box" v-if="msg.show">

        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import { Table, enhanceTable } from '@/model';

@Component
export default class tick extends Vue {
    val = '77777'

    @Prop()
    @Model('valueChanged')
    bindValue!: any;


    @Prop()
    msg:any

    @Prop() 
    name: any;


    table = new Table();

    enhanceTable = new enhanceTable();


    get currentValue() {
        return this.bindValue;
    }

    set currentValue(val:any) {
        this.$emit('valueChanged',val)
    }

    list = [
        1,2,3
    ]

    text ='3333'

    async onClick() {
     
        this.$emit('add','nssm');
        debugger
        this.$emit('add','seconed');
    }

    changeItem() {
        this.list[0]= 999
    }

    mounted(){
        this.onClick();
        // debugger
        this.$nextTick(()=>{
            // debugger
            console.log(123456)
        })
    }
}
</script>
<style lang="less" scoped>
.main-class{
    width: 200px;
    background: red;

    .box {
        height: 500px;
    }
}
</style>