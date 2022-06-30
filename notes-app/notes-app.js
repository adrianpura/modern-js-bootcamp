let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const date1 = new Date('January 24 1996 12:00:00')
const date2 = new Date()
const timestamp1 = date1.getTime()
const timestamp2 = date2.getTime()
if (timestamp1 < timestamp2) {
    console.log(date1.toDateString())
} else if (timestamp2 < timestamp1) {
    console.log(date2.toString)
}