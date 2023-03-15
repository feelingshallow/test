const http = require('http');

const server = http.createServer({
  function(req){
    console.log(req);
  }  
})

server.listen(5500);