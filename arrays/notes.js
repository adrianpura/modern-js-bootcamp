const notes = [
    {
        title: 'Note 1',
        body: 'Body 1'
    },
    {
        title: 'Note 2',
        body: 'Body 2'
    },
    {
        title: 'Note 3',
        body: 'Body 3'
    },
]


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return - 1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}


// console.log(findNotes(notes, 'Note 1'))

// const note = findNote(notes, 'note 2')
// console.log(note)

sortNotes(notes)
console.log(notes)