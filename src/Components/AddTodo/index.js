import React from 'react'

const Todo = ({ inputText, inputTextHandler, todo, submitTodoHandler }) => (
    <div>
        <form>
            <div className="container-fluid">
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input mt-5 rounded-pill text-center"
                    placeholder="Enter TODO's Here"
                    style={{ width: "30%" }}
                />
                <button onClick={submitTodoHandler} className="btn btn-primary m-2 rounded-pill" type="submit">ADD TODO</button>
            </div>
        </form>
    </div>
)


export default Todo
