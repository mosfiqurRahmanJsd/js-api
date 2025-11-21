
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


const handleUser2 = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
    catch {
        console.log('Hello')
    }
}


handleUser2(); 