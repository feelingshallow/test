function throttle(fn,wait=500) {
    let timer = 0;
    return function() {

        if(Date.now - time > wait) {
            fn()
            timer = Date.now;
        }
    }

}