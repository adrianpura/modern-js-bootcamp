

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


getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})



// //making an http request

// // console.log(request.responseText)

// const countryCode = 'PH'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {

//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('error')
//     }
// })

// countryRequest.open('GET', 'http://restcountries.com/v2/all', true)
// countryRequest.send()
// // console.log(request.responseText)