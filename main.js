// arguments
// so funciona em funcoes com nome function
function numeros(){
    console.log(arguments)
    // caso nao passe um parametro argumentes salvara todos
}
// jeito moderno
function numeros2(...arg){
    console.log(arg)
}
numeros(1,2,3,6,4,5)
numeros2(1,2,3,6,4,5)

// definir um valor padrao de parametro
// defini que se o valor de b nao for definido ele sera 0
function multiplica (a, b = 0){
    let total = a * b;
    console.log(total)

}
multiplica(1)

// receber vario parametro

function  conta([operador, acumulador,...numeros]){
    let total = acumulador;
    for (let numero of numeros) {
        if(operador === '+') total += numero
        if(operador === '-') total -= numero
        if(operador === '/') total /= numero
        if(operador === '*') total *= numero
        
        
    }
    console.log(total)

}
conta(['*',0,5,5,5,5,5,5,5])


function calculadora([operador,...numeros]){
    let resultado = 0
    for (let numero of numeros) {
        if(operador === '+'){
            resultado += numero
        }
        
    }
    console.log(resultado)
}
calculadora(['+',8,6])