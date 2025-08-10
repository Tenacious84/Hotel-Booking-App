let todos = []


function add_todo(todo) {
    todos.push(todo)
}

function remove_todo(todo_id) {
    todos = todos.filter((e,i) => {
        return todo_id != e.id
    })
}


// Adding something in todo

add_todo({id: todos.length+1, content: 'going to office'})

add_todo({id: todos.length+1, content: 'Presenting PPT to manager'})

add_todo({id: todos.length+1, content: 'going to office'})

add_todo({id: todos.length+1, content: 'buying milk'})



// Remove something for todo


remove_todo(1)


add_todo({id: todos.length+1, content: 'something cool'})

console.log(todos)

