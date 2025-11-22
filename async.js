
// const handleLoadUser = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json()) 
//     .then(data => displayUser(data))
//     .catch(error => console.log('error catch', error))
// }


// const displayUser = (users) => {
//     users.forEach(user => {
//         console.log(user.name); 
//     });
// }


// const handleUser2 = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch {
//         console.log('Hello')
//     }
// }


// handleUser2(); 


console.log('hero'); 
console.log('hero'); 
console.log('hero'); 
function sum() {
    console.log('Hello'); 
}
sum(); 



const fetchData = () => {
    return new Promise((resolve, reject) => {
        const status = true; 
        if(status) {
            resolve({name: "hero"})
        } else {
            reject('server error')
        }
    })
}

console.log(fetchData()); 