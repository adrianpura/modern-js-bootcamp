'use strict'

//read existing todo from the local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        return []
    }
}

//save the todo to local storage
const saveTodo = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}


//generate the DOM structure for a todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const spanEl = document.createElement('span')
    const buttonEl = document.createElement('button')


    checkboxEl.setAttribute('type', 'checkbox')
    containerEl.appendChild(checkboxEl)
    checkboxEl.checked = todo.completed
    checkboxEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodo(todos)
        renderTodo(todos, filters)
    })

    // if (todo.text.length > 0) {
    //     spanEl.textContent = todo.text
    // } else {
    //     spanEl.textContent = 'unnamed todo'
    // }

    spanEl.textContent = todo.text
    containerEl.appendChild(spanEl)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    buttonEl.textContent = 'remove'
    buttonEl.classList.add('button', 'button--text')
    todoEl.appendChild(buttonEl)
    buttonEl.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTodo(todos, filters)
    })





    return todoEl
}


//render application todo
const renderTodo = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''


    todoEl.appendChild(generateSummaryDOM(incTodos))


    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            const p = generateTodoDOM(todo)
            todoEl.appendChild(p)
        })

    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No todos to show'
        todoEl.appendChild(messageEl)
    }
}

const generateSummaryDOM = (incTodos) => {
    const summary = document.createElement('h2')
    const todo = incTodos.length === 1 ? 'todo' : 'todos'
    summary.textContent = `You have ${incTodos.length} ${todo} left`
    summary.classList.add('list-title')
    return summary
}





