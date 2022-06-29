//read existing todo from the local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//save the todo to local storage
const saveTodo = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


//generate the DOM structure for a todo
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const spanEl = document.createElement('span')
    const buttonEl = document.createElement('button')


    checkboxEl.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkboxEl)
    

    if (todo.text.length > 0) {
        spanEl.textContent = todo.text
    } else {
        spanEl.textContent = 'unnamed todo'
    }
    todoEl.appendChild(spanEl)

    buttonEl.textContent = 'x'
    todoEl.appendChild(buttonEl)

    return todoEl
}


//render application todo
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


    document.querySelector('#todos').appendChild(generateSummaryDOM(incTodos))


    filteredTodos.forEach(function (todo) {
        const p = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(p)
    })
}

const generateSummaryDOM = function (incTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incTodos.length} left`
    return summary
}



