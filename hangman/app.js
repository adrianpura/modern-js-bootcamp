

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')


const hangman1 = new Hangman('Car Parts', 2)
puzzleEl.textContent = hangman1.puzzle
guessesEl.textContent = hangman1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    puzzleEl.textContent = hangman1.puzzle
    guessesEl.textContent = hangman1.statusMessage
})

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log('err: ', err);
})
 

// getCurrentCountry().then((country) => {
//     console.log('country: ', country.name);
// }).catch((err) => {
//     console.log('err: ', err);
// })



