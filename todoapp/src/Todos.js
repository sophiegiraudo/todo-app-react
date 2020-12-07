import React from 'react';

const Todos = ({todos, deleteTodo, completeTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            const classes = todo.checked ? "todoItem checked" : "todoItem";

            return (
                <div className="item" key={todo.id}>
                    <span onClick={() => {completeTodo(todo.id)}} className={classes}> {todo.content}</span>
                    <button onClick={() => {deleteTodo(todo.id)}} className="removeButton" >&#10799;</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left!</p>
    )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;
