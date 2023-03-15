class Axios {
    constructor() {

    }

    request(config) {
        let {url,method,data} = config;

        return new Promise((resolve)=> {
            let xhr = new XMLHttpRequest();
            xhr.open(method,url);
            xhr.send(data)
            xhr.onload =function() {
                console.log(xhr)
                resolve(xhr.responseText) 
            }
        })
    }
}
const method = [ 'get','post','put','delete']
method.forEach((f)=>{
    console.log(f)
    Axios.prototype[f] = function(){
        if(['get', 'delete', 'head', 'options'].includes(f)) {
            this.request({
                method:f,
                url: arguments[0],
                 ...arguments[1]
            })
        }else {

        }
    }
})
function createAxiosFn() {
    let axios = new Axios();
    let request = axios.request.bind(axios);
    return request
}

var axios = createAxiosFn();