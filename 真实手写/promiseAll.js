
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('promise1')
        resolve(1)
    }, 1000)
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('promise2')
        resolve(3)
    }, 2000)
})

const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('promise3')
        reject(2)
    }, 500)
})



// function PromiseAll(arr) {
//     return new Promise((resolve,reject) => {
//         let result = new Array(arr.length);
//         let count = 0;
//         for(let i = 0; i<arr.length; i ++) {
//             Promise.resolve(arr[i]).then((res)=> {
//                 result[i] = res;

//             })
//         }
//     })
// }

// PromiseAll([promise1, promise2, promise3])


// function PromiseRace(arr) {
//     return new Promise((resolve,reject) => {

//         for(let i= 0; i<arr.length; i++) {
//             Promise.resolve(arr[i]).then((response)=>{
//                 resolve(response)
//             }).catch((e)=>{
//                 reject(e)
//             })
//         }
//     })
// }

// PromiseRace([promise1, promise2, promise3]).then((res)=>{
//     console.log('promise Race Value',res)
// })


// Promise.allSettled([promise1, promise2, promise3]).then(res=>{
//     console.log(res)
// })

function PromiseAllSettled() {
    return new Promise ((resolve, reject)=> {
        
    })
}