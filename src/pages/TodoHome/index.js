import React, { useState, useEffect } from 'react'
import AddTodo from '../../Components/AddTodo'
import ShowTodo from '../../Components/ShowTodo'
const TodoHome = (props) => {
    const [inputText, setInputText] = useState("")
    const [todo, setTodo] = useState([])

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        if(inputText !== "")
        setTodo([
            ...todo, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        else
        alert("Enter Atlest One TODO")
         
        setInputText("")
    }

    useEffect(() => {
        if (localStorage.getItem('todoList')) {
            setTodo(JSON.parse(localStorage.getItem('todoList')))
        }
        return () => {
        }
    }, [])
    useEffect(() => {
        if (todo) {
            localStorage.setItem('todoList', JSON.stringify(todo))
        }
        return () => {
        }
    }, [todo])

    const update = (id, isComplete) =>{
      const updatedTodo =   todo.map((item, index) =>{
         if(id===item.id){
             item.completed = !isComplete
             return item
         }
         return item
        })
        setTodo([...updatedTodo])
    }

    const deleteTodo = (id, isComplete) =>{
        const updatedTodo = todo.filter((item, index) =>(
            item.id !== id
        ))
        setTodo([...updatedTodo])
    }
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <AddTodo inputText={inputText}
                        inputTextHandler={inputTextHandler}
                        submitTodoHandler={submitTodoHandler}
                        todo={todo}
                    />
                </div>
                {
                    todo ?
                        <div className='col-12'>
                            <h1>Todo List</h1>

                            <div className="container-fluid rounded w-50 mt-5">
                                <ul className="list-unstyled ">
                                    {
                                        todo.map((item, index) => (
                                            <ShowTodo update={update} deleteTodo={deleteTodo} text={item.text} id={item.id} isComplete={item.completed} />
                                        ))
                                    }
                                </ul>
                            </div>
                        </div> :
                        <div>
                        </div>
                }

            </div>
        </>

    )
}

export default TodoHome