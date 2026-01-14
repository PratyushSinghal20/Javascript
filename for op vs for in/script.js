const fruits = ['banana' , 'apple' , 'peach' , 'mangoo', 'grapes']

for(let i = 0;i <fruits.length ; i++ ) {
    console.log(fruits[i]);
}

for(const fruit of fruits) {
    console.log(a); 
} 

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyecolor: 'blue',
    city: 'Banglore',


}

for(const key in person) {
    console.log(key, ':' , person[[key]])
}