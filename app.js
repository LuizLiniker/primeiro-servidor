const usuarios = [{
    id: 1,
    nome:"Liniker",
    numero:1,
    cpf:123,
    dataDeNascimento:"08/10/2006",
    email: "linikerluiz32@crescix.com",
    idade: 19,
},
{
    id: 2,
    nome:"Crenilda",
    numero:2,
    cpf:456,
    dataDeNascimento:"05/05/1978",
    email: "crenildasilva@crescix.com",
    idade: 20,
}
]


const express = require("express")

const app = express()

app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    next();
})

app.get("/", (req, res) =>{
    res.send("Página inicial com express")
})

app.get("/usuarios", (req,res) => {
    res.json(usuarios);
})

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})

