
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


const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    p.textContent = '***********'
    // console.log(p.textContent)
    // p.remove()
})


//add new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'this is the new element from javascript'
document.querySelector('body').appendChild(newParagraph)