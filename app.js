const express = require("express")

const app = express()

app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    next();
})

app.get("/", (req, res) =>{
    res.end("Página inicial com express")
})

app.get("/usuarios", (req,res) => {
    res.send("Página de lista de usuários");
})

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})