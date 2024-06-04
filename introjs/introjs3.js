/* var - hoisting (elevação/içamento)
//msg = "oi" //variavel global
void function(){
    //msg = "oi" //variável local
    console.log(msg)
}()
var msg = "oi"
*/
/*
var exibemsg = function(){
    let escopobloco = "Alura"
    if (true) {
        var escopofuncao = "Caelum"
        //let escopobloco = "Alura"
        console.log(escopobloco)
    }
    console.log(escopofuncao)
    console.log(escopobloco)
}
exibemsg()
*/
/*
void function(){
    const mensagem = "Alura"
    console.log(mensagem)
    mensagem = "caelum"
}()*/

let x = 43
console.log(x == 43)
console.log(x == "43")
console.log(x === "43")

/*
let idade = prompt("Digite a sua idade")
if (idade >= 18){
    console.log("Voce e maior de idade")
}else{
    console.log("Voce e menor de idade")
}
*/
/*
let estado = "sp"
switch(estado){
    case "sc":
        console.log("Santa Catarina")
    break
    case "pr":
        console.log("Parana")
    break
    case "rs":
        console.log("Rio Grande do Sul")
    break
    default: 
        console.log("Não é da região sul")
    break    
}   
*/
/*
let cont = 0
while(cont < 10){
    cont = cont + 1
    console.log(cont)
}

let cont2 = 10
while(cont2 > 0){
    console.log(cont2)
    cont2 = cont2 - 1
}
*/


for(let i=0;i < 10;i++){
    console.log(i)
}

let qualovalor=0
//console.log(qualovalor++)
console.log(qualovalor)
qualovalor = qualovalor + 1
//console.log(++qualovalor)
qualovalor = qualovalor + 1
console.log(qualovalor)

//foreach
let lista = ['banana', 'laranja', 'maça']
for(let umafruta in lista){
    console.log(umafruta + ' ' + lista[umafruta])
    console.log(`${umafruta}  ${lista[umafruta]}`)
}