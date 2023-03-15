<template>
    <div class="main-class">
        isSon
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class son extends Vue {
    created() {
        console.log('son created')
    }
    mounted() {
        console.log('son mounted')
    }
}
</script>
<style lang="less" scoped>
.main-class{
}
</style>