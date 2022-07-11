const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')


const hangman1 = new Hangman('Cat', 2)
puzzleEl.textContent = hangman1.getPuzzle()
guessesEl.textContent = hangman1.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    puzzleEl.textContent = hangman1.getPuzzle()
    guessesEl.textContent = hangman1.getStatusMessage()
})
