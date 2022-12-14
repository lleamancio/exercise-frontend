let numero = 1
{
    let numero = 2
    console.log("dentro = ", numero)
    //Let dá preferencia para variavel encontra no escopo menor (dentro das primeiras chaves)
    //caso contrario vai busca fora
}

console.log("fora = ", numero)