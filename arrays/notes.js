const notes = [
    'Note 1',
    'Note 2',
    'Note 3',
]

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// console.log(notes.unshift('My First Note'))

// notes.splice(1,1,'New second item')

notes[2] = 'new note 3'


notes.forEach(function(item,index){
    console.log(index)
    console.log(item)
});



console.log(notes.length)
console.log(notes)