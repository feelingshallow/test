/**
 * loader 就是一个函数 当webpack 解析资源的时候
 * @param {*} context 
 * @returns 
 */


module.exports =  function(context) {
        console.log(this);
        return context;
    }
