const express = require('express');
var ws=require('nodejs-websocket');

const app = require('http').createServer(handler);
app.listen(82)

function handler(req,res){
    fs.readFile(__dirname+'/client.html',function(err,data){
        if(err){
            res.writeHead(500);
            return res.end('error ');
        }
        res.writeHead(200);
        res.end(data);
    });
}

let server = ws.createServer(function(Con){
    console.log('concent')
    
    console.log(Con)
    Con.on('text',function(a){
        console.log(a)
        broadcast(server,a)
    })
    Con.on("close",function(code,reason){
        console.log('connection closed');
    })
}).listen(5001)

function broadcast(server, msg) {
    server.connections.forEach(function (conn) {
 
        conn.sendText('服务端收到消息',msg);
    })
}