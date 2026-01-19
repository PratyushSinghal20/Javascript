 const months = ['January' , 'february' , 'March' , 'April']


// months.map(( index , month) => {
//     console.log(index+1 , month);
//     return month.toUpperCase()
// })



// const filterMonths = months.filter(( month , index , array) => {
//     return month.toUpperCase()
// })

const filterMonth = months.filter((month, index , array) => {
   
   console.log(month)
    return month.toLowerCase().includes('m')
}) 

const students = [
    {
        name : 'Akash',
        age : 21,
    },
    {
        name : 'Adarsh',
        age : 17,
    },
    {
        name : 'Aohh',
        age : 18,
    }
]

const adultStudents = students.filter((student) =>
{
   
    return student.age >= 18
})

const adultStudentsName = adultStudents.map((student) => {
return 'Anurag'
}) 