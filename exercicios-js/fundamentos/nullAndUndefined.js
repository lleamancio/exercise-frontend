const a = {name: "Teste"}

//Atribuindo por referencia
const b = a;

console.log("Valor de B: " , b)

//Alterando A

a.name = "New Teste"

console.log("Valor de B: " , b)
//B está armazenando o endereço de valor


let c = 3
let d = c

d++
console.log("Valor de C: " , c)
console.log("Valor de D: " , d)
//Tipos primitivos atribui valor a variavel d

let valor //não inicializada 
console.log(valor)//resultado: undefined

valor = null //ausência de valor
console.log(valor) //resultado: null

