const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}
renderTodo(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed: false
    })
    saveTodo(todos)
    renderTodo(todos, filters)
    e.target.elements.todoText.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})


