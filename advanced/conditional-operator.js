// const myAge = 26
// const message = myAge >= 18 ? 'you can vote' : 'you cannot vote'
// console.log(message)


const myAge = 26
const showPage = () => {
    return 'showing the page'
}

const showErrorPage = () => {
    return 'showing error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)


const team = ['Tyler', 'Porter']
const message1 = team.length >= 4 ? 'Too many people' : `Team size : ${team.length}`
console.log(message1)