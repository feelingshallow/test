import Observer from "./observe";


export class Vue {
    constructor(options) {
        this.$data = options.data;
        this.$options=options;
        this.$methods = options.methods;

        this.initRootElements(options);
        this._proxyData(this.$options.data);
        Observer(this.data)

    }
    initRootElements(options) {
        if(typeof  options.el === 'string') {
            this.$el = document.querySelector(options.el)
        } else if (options.el instanceof Element  ) {
            this.$el =options.el
        } 

        if(!this.$el) {
            throw new SyntaxError('el 必须是Html 元素')
        }


    }

    _proxyData(data) {
    for(let item in data) {
        Object.defineProperty(this ,item,{
            get() {
                return data[item]
            },
            set(newValue) {
                if(newValue === data[item]){
                    return data[item]
                }
                data[item]=newValue
            }
        })
    }
    }


    mount() {
        
    }
}