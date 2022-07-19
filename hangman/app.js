

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

// getPuzzle('1').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log('err: ', err);
// })

// const countryCode = 'PH'
// getCountryDetails(countryCode).then((countryDetails) => {
//     console.log('countryDetails: ', countryDetails.name);
// }, (err) => {
//     console.log('err: ', err);

// })

fetch('https://cors-anywhere.herokuapp.com/http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log('data: ', data.puzzle);
}).catch((error) => {
    console.log('error: ', error);
})

