function debounce(fn,wait=500) {
    let timer = 0;
    return function() {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn()
            console.log('执行')
        },wait)
    }
}