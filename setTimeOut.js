// console.log(1)
// console.log(2)
// console.log(3)
// setTimeout(() => {
//     console.log('ami time out'); 
// }, 1000)

let count = 0; 

const clockId = setInterval(() => {
    // count = count + 1; 
    count++; 

    console.log(count); 

    if(count >= 5) {
        clearInterval(clockId); 
    }
}, 3000)



// console.log(4)
// console.log(5)
// console.log(6)