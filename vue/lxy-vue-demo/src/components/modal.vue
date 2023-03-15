<template>
    <div class="main-class">
        我是  {{ value }}

        <button @click="Myvalue++">jiajia</button>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class modal extends Vue {
    @Prop()
    value!: number;

    get Myvalue() {
        return this.value;
    }

    set Myvalue(val:number) {
        this.$emit('input',val)

    }

}
</script>
<style lang="less" scoped>
.main-class{
}
</style>