const evenNumbers = [0,2,4,6,8];

// const result = evenNumbers.some((num , i) => {
//     if (num%2 === 1) {  
//         console.log(i);
//     }
//     return num % 2 === 1;
// })


const result = evenNumbers.every((num , i) => {
 num % 2 === 0;
})