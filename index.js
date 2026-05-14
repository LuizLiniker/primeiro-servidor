const http = require("http")

const servidor = http.createServer(function(req, res){
    res.end("Servidor Funcionando")
})

servidor.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
})