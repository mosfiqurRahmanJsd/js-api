const loadData = async () => {
    try {
        console.log('ami prothom')
    console.log('ami second')
    // setTimeout(() => {
    //     console.log('ami set time out'); 
    // }, 1000); 

    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await response.json(); 
    console.log(data); 
    


    const result = 10 + 10;
    console.log(result)
    console.log('ami third')
    }
    catch {
        console.log(error); 
        
    }
}

loadData()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))


async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await response.json(); 
    console.log(data); 
    console.log(74); 
}

// fetchData(); 