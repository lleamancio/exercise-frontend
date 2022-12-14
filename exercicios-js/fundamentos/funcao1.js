//function without return
function printSum(a, b){
    console.log(a+b)
}

printSum(2,3)

//se não passar um dos parametros ele vai somar com underfined
printSum(2)

//here, only use the first and second parameters
printSum(2,10,4,7,6,9)

printSum()


//function with return
function sum(a, b = 0){
    return a + b
}

console.log(sum(2,3))
console.log(sum(2))
console.log(sum())