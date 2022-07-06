//read existing todo from the local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }
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
    const todoEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const spanEl = document.createElement('span')
    const buttonEl = document.createElement('button')


    checkboxEl.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkboxEl)
    checkboxEl.checked = todo.completed
    checkboxEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodo(todos)
        renderTodo(todos, filters)
    })

    if (todo.text.length > 0) {
        spanEl.textContent = todo.text
    } else {
        spanEl.textContent = 'unnamed todo'
    }
    todoEl.appendChild(spanEl)

    buttonEl.textContent = 'x'
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
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''


    document.querySelector('#todos').appendChild(generateSummaryDOM(incTodos))


    filteredTodos.forEach((todo) => {
        const p = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(p)
    })
}

const generateSummaryDOM = (incTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incTodos.length} left`
    return summary
}



