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
    searchText: '',
    hideCompleted: false
}

const renderTodo = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
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
    renderTodo(todos, filters)
    e.target.elements.todoText.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})


