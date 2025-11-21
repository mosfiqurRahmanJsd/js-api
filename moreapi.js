
const handleLoadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()) 
    .then(data => displayUser(data))
}


const displayUser = (users) => {
    users.forEach(user => {
        console.log(user.name); 
    });
}