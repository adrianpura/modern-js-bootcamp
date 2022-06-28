const todos = [
    {
        text: 'Todo 1',
        completed: true
    },
    {
        text: 'Todo 2',
        completed: false
    },
    {
        text: 'Todo 3',
        completed: true
    },
    {
        text: 'Todo 4',
        completed: false
    },
    {
        text: 'Todo 5',
        completed: true
    }
]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase() ?? index
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}


const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
        // return a.completed - b.completed
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))