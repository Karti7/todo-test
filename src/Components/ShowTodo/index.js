import React from 'react'

const TodoListRender = ({ text, id, isComplete, update, deleteTodo}) => {
  
    return (
        <div className='pt-1'>
            <li className={`todo-item  text-left list-group-item-${isComplete ? 'success' : 'warning'}`}>{text}
                <i class="fa fa-times float-end  px-2" style={{ cursor: 'pointer' }} onClick={(() =>deleteTodo(id,isComplete))}></i>
                <i class="fa fa-check float-end " style={{ cursor: 'pointer' }} onClick={()=> update(id, isComplete)}></i>
            </li>
        </div>
    )
}

export default TodoListRender
