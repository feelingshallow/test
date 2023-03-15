<template>
    <div>
        <div class="change-block" @click="changeMes">
            <span>{{mesg}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    mesg = "12333";

    get TextMap() {
        return new Map([
            [ this.mesg ,2222]
        ])
    }

    changeMes() {
        console.log('change')
        this.mesg =  this.mesg + '123'
    }

    beforeCreate() {
        console.log( this.$store)
    }

    created() {
        console.log("inner created", this.$options);
    }
    mounted() {
        // this.mesg = '8888';
        console.log("inner mounted", this.$options);
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.change-block {
    width: 200px;
    height: 200px;
    background: #00c1de;
}
</style>
