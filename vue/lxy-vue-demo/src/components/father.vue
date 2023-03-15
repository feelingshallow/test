<template>
    <div class="main-class">
        <son></son>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import son from './son.vue';

@Component({
    components:{
        son
    }
})
export default class father extends Vue {
    arr = [
        {v:1},
        {v:2},
        {v:3},
        {v:4},
        {v:5},
    ]
    created() {
        console.log('father created',)
       
    }
    mounted() {
        console.log('father mounted')
    }
}
</script>
<style lang="less" scoped>
.main-class{
}
</style>