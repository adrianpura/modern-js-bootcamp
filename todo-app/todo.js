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

const filters = {
    searchText: ''
}

const renderTodo = function (todos, filter) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    })

    const incTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incTodos.length} left`
    document.querySelector('#todos').appendChild(summary)


    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })


    // filteredTodos.forEach(function (todo) {
    //     const todoEl = document.createElement('p')
    //     todoEl.textContent = todo.text
    //     document.querySelector('#todos').appendChild(todoEl)
    // })
}
renderTodo(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    
    renderTodo(todos,filters)
    e.target.elements.todoText.value = ''
})
