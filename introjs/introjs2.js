//tipo inteiro - number
a = 10
console.log(a + " " + typeof(a))
//tipo decimal - number
a = 20.5
console.log(a + " " + typeof(a))
//tipo texto - string
a = "Como assim é a mesma variável?"
console.log(a + " " + typeof(a))
//tipo lógico - booleano
a = true
console.log(a + " " + typeof(a))

a = ['banana', 'laranja']
console.log(a[1] + " " + typeof(a))

a = new Object()
a.nome = "zezinho"
a.idade = 10
console.log(a.nome + " " + typeof(a))


function minhaFuncao(){
    console.log("Por que você não passa la...?")
}

function meclica(quemfoi, nome){
    console.log("Clicou!!! " + quemfoi)
    console.log(nome)
}


console.log("Antes")
minhaFuncao()
console.log("Depois")


