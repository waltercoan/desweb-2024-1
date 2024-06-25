/* Criação do projeto
1) criar uma pasta projetofinal
2) abrir o terminal e digitar cd projetofinal
3) digitar: npm init
4) teclar enter ate o final
5) digitar: npm install express express-handlebars bootstrap body-parser jquery
6) criar o arquivo index.js
7) digitar: node index.js
*/

//carregando a biblioteca express
const express = require('express')
//executa a biblioteca express
const app = express()

const { engine } = require('express-handlebars')
const path = require('path')

app.set('view engine', 'handlebars')
app.engine('handlebars', engine())

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


const dadosfalsos = [
    {
        id: 1,
        nome: "Zezinho da Silva Sauro",
        endereco: "Rua lalalala 100",
        telefone: "5555-4322",
        datanascimento: "24/06/2024"
    },
    {
        id: 2,
        nome: "Mariazinha da Silva",
        endereco: "Rua lululu 200",
        telefone: "5555-34234243",
        datanascimento: "23/06/2024"
    }
]


//let contador = 0

app.get('/', (req,res) =>{
    //contador = contador + 1
    //res.send("EU NAO ACREDITO!!!!" + contador)
    res.render('index')
})

app.get('/clientes', function(request, response){
    response.render('clientes/index', {listaclientes: dadosfalsos})
})


app.get('/clientes/novo', function(req,res){
    res.render('clientes/formcliente')
})



app.listen(3000, ()=>{
    console.log('Servidor online')
    console.log('http://localhost:3000/')
})
