

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

getPuzzle('1').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log('err: ', err);
})

const countryCode = 'PH'
// getCountryDetails(countryCode, (error, countryDetails) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(countryDetails.name)
//     }
// })

getCountryDetails(countryCode).then((countryDetails) => {
    console.log('countryDetails: ', countryDetails);
}, (err) => {
    console.log('err: ', err);

})

