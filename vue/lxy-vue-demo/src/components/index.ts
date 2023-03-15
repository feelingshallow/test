import HelloWorld from "./HelloWorld.vue";

const aVue = HelloWorld.extend({
    methods: {
        changes() {
            console.log(12345)
        }
    },
    data:function(){
        return {
            a:2222,
            mesg:123
        } 
    }
});

// const bVue = HelloWorld.mixin({
//     created() {
//         console.log("outer created");
//     },
//     mounted() {
//         console.log("outer mounted");
//     }
// })

export { aVue  };

