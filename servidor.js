const http = require ("http")

http.createServer((requisicao, resposta )=>{
resposta.writeHead(200,{
    "content-Type":"test/plain"  // paremetro 200 ok 
})
resposta.write("Thiago \n ")
resposta.end()

}).listen(1337)

