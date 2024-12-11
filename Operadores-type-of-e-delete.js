
/* Operadores type of e delete

typeof -> Tipo de dado
delete -> Deleta a variável ou objeto

*/

const myObject = {
    name: 'João',
    age: 30,
    address: 'Rua 1, 123'
}

console.log(typeof myObject) // object
console.log (typeof myObject.name) // string

delete myObject.address
console.log(myObject) // deleta parametro ou propriedade do objeto