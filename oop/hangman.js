const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}


const hangman1 = new Hangman('any', 2)
console.log(hangman1)

const hangman2 = new Hangman('any1', 22)
console.log(hangman2)