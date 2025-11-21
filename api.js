
const person = {
    name: 'Mosfiqur Rahman', 
    age: 29, 
    friends: ['Atik', 'Nadim']
}

const newPerson = JSON.stringify(person); 
console.log(newPerson); 


const newPerson2 = JSON.parse(newPerson); 
console.log(newPerson2); 