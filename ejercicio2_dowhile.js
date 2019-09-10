/********** DO-WHILE *************/ 
let peso = 80 
let pesoIdeal = 70
let kilosXSemanas = 2
let semanas = 0

do{
    peso = peso - kilosXSemanas
    semanas = semanas + 1 
}
while(peso > pesoIdeal)
console.log(semanas)
