import React from 'react'
import TodoListRender from './TodoListRender'

const TodoList = ({todo}) => {
    
    return (
        <div className="container-fluid bg-dark text-white  rounded w-50 mt-5">
          <ul className="list-unstyled ">
            {todo.map((todo) => (
                <TodoListRender text={todo.text} id={todo.id} />
            ))}
          </ul>
        </div>
    )
}

export default TodoList
