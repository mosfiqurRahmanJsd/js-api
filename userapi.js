const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showUser(data))
}


const showUser = (users) => {
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        const usersContainer = document.getElementById('users');
        usersContainer.appendChild(li);
    })
}




const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

const displayPost = (posts) => {
    const postContainer = document.getElementById('post');
    posts.forEach(post => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h1>${post.id} : ${post.title}</h1>
            <p>${post.body}</p>
        
        `
        postContainer.appendChild(div); 
    });

}


handlePost(); 