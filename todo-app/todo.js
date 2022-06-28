const todos = [
    {
        text: 'Clean the Kitchen',
        completed: true
    },
    {
        text: 'Book Flights',
        completed: false
    },
    {
        text: 'Walk the dog',
        completed: true
    },
    {
        text: 'Research Museums',
        completed: false
    },
    {
        text: 'finish this course',
        completed: true
    }
]

const incTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incTodos.length} left`
document.querySelector('body').appendChild(summary)


todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
