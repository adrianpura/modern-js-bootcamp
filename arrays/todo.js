const todos = [
    'Todo 1',
    'Todo 2',
    'Todo 3',
    'Todo 4',
    'Todo 5',
]

//delete 3rd item
//add item onto the end
//remove the first item from the list

todos.splice(2, 1)
todos.push('added last item')
todos.shift()


console.log(`You have ${todos.length} todos`)
console.log(todos)
