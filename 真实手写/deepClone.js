function cloneDeep(obj) {
    if(typeof obj !== 'object') {
        throw new Error(SyntaxError('need object'));
    }
    let result = Array.isArray(obj) ? [] : {};
    for (let item in  obj ) {
        if(typeof obj[item] !== 'object') {
            result[item] = obj[item]
        }else {
            result[item] =  cloneDeep(obj[item])
        }
    }
    return result;
}


let a = {
    x:1,
    y: {
        c: x
    }
}

let b = cloneDeep(a)

a.y.c=2;
console.log(b)