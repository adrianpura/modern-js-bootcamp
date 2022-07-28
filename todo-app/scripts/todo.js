'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}
renderTodo(todos, filters)

document.querySelector('#search-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})



document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.todoText.value.trim()
    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodo(todos)
        renderTodo(todos, filters)
        e.target.elements.todoText.value = ''
    }

})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})


