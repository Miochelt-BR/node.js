const http = require("http");
const porta = 3000
const host = "127.0.0.1";

const servidor = http. createServer ((req,res)=>{
 res.writeHead (200, {'content-Type':'text/html'})

 if(req.url=='/'){
     res.write("<H1>MUITO BOM!</H1>")
              

    }else if(req.url== '/canal'){
        res.write("<H1>voce é top!</H1>")

    }if(req.url== '/curso'){
    res.write("<H1>otaco porrraaaa!</H1>")
    }
     res.end()
})
servidor.listen(porta,()=>{console.log('tudo esperado ')})