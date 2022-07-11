const Hangman = function (word = [], remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c', 'e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });

    return puzzle
}


const hangman1 = new Hangman('Cat', 2)
console.log(hangman1.getPuzzle())

const hangman2 = new Hangman('New Jersey', 22)
console.log(hangman2.getPuzzle())