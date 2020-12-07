import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy some milk", checked: true},
      {id: 2, content: "play mario kart", checked: false}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  } 
  completeTodo = (id) => {
    const todos = this.state.todos;
    todos.map((todo) => {
      if (todo.id === id){
        todo.checked = !todo.checked;
      }
      return todo
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app">
        <h1 className="header">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
