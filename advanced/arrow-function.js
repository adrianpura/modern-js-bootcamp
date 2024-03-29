const square = (num) => num * num


const squareLong = (num) => {
    return num * num
}
console.log(square(5))

const people = [{
    name: 'adrian',
    age: 26
}, {
    name: 'adrian1',
    age: 31
}, {
    name: 'adrian2',
    age: 22
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })


const under30 = people.filter((person) => person.age < 30)
console.log(under30)


const age22 = people.find((person) => person.age === 22)

console.log(age22.name)