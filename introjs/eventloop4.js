function soma(a, b, mechama){
    setTimeout(function(){
        //return a + b
        mechama(a + b)
    }, 500)
}

/*let resultado = soma(2,2)
console.log(resultado)*/
console.log("ANTES")
soma(2,4, function(result){
    console.log(result)
})
console.log("DEPOIS")