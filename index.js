//Estou pedindo emprestado o módulo http
//Que já vem dentro do node.js
const http = require("http")

//defino minha porta - meu canal de escuta
const PORTA = 3000

//crio o servidor 
//req = o pedido que chega
//res = a resposta que eu mando de volta
const servidor = http.createServer((req, res) => {

    if(req.url == "/"){
        res.end("Página inicial")
    }
    else if(req.url == "/usuarios"){
        res.end("Lista de usuarios")
    }
    else{
        res.end("Página não encontrada")
    }
    
})

//Mando o servidor começar a escutar

servidor.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
})