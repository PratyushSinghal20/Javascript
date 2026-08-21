console.log("Program Started")

// let num = 0

// while(num < 10) {
//     console.log(num);
//     num+= 1
// }


const friends = ['Akash' , 'Rahul' , 'Adarsh' , 'Arif' , 'Gaurav']

let i = 0

// while (i < 5) {
//     console.log(friends[i]);
//     i+= 1
// }

while(i < friends.length) {
    console.log(`${i+1} . ${friends[i]}`);
    friends[i] = friends[i] + 'Procoder'
}

console.log("Program  End")