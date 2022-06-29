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

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filter) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'the button was click'
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#for-fun').addEventListener('change', function (e) {
    console.log(e.target.checked)
})