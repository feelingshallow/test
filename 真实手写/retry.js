const fetch = require('fetch')
const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('promise3')
        resolve(2)
    }, 500)
})

fetch('https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF')

function retry (url,times){
    return fetch('https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF')
    .catch(
        e=> times >0? retry(url,times-1): Promise.reject(e)
        
    )
}

retry(promise3,5)