export class Table {
    a = 1;
    b = 2
}


export  let enhanceTable = new Proxy(Table.prototype.constructor, {
    apply:function(target, a) {
        console.log(target, a)
        return '1221'
    }
})

