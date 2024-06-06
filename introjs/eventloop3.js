//importando a biblioteca express 
const express = require('express')
//colocando a biblioteca em execução
const app = express()

app.get('/infinito', (req, res) => {
  let i = 0
  /*while(i < 50000){
    console.log(i++)
  }*/
  setInterval(function(){
    console.log(i++)
  },10)
})

app.get('/data', (req, res) => {
    res.json({data: new Date()})
})

app.get('/ola', (req, res) => {
    res.send('Olá, mundo!' + req.query.nome)
})



app.listen(8080)
