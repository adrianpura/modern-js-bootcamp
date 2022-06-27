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
    return todos.filter(function (todo, index) {
        return todo.completed === false
    })
}

console.log(getThingsToDo(todos))