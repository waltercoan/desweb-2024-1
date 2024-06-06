function soma(a, b) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(a + b)
        }, 500)
    })
    
}
/*console.log("Antes")
soma(2,4).then(function(result){
    console.log(result)
})
console.log("Depois")*/

(async function(){
    let resul = await soma(2,4)
    console.log(resul)
})()