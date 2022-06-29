let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

//check existing data
const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
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
        if (todo.text.length > 0) {
            p.textContent = todo.text
        } else {
            p.textContent = 'unnamed todo'
        }

        document.querySelector('#todos').appendChild(p)
    })
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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodo(todos, filters)
    e.target.elements.todoText.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})


