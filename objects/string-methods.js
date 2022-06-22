let name = '   Adrian Pura   '

//lenght property
console.log(name.length)

//convert to uupercase
console.log(name.toUpperCase())

//convert to lowercase
console.log(name.toLowerCase())

//includes method
let password = 'abc123passwod098'
console.log(password.includes('password'))

//trim
console.log(name.trim())


let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdasd'))
console.log(isValidPassword('abc123!@#!$'))
console.log(isValidPassword('asdapassword'))
