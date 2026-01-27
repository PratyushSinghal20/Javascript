// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];

// // const joinedArray = num1.concat(num2);

// const spreadArray = [...num1, ...num2];

// const user = {
//     user : 'Pratyush',
//     age : 25 , 
// }

// const updatedUser = {
//     ...user,
//     location : 'India',
// }

function add() {
    console.log(arguments);

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}