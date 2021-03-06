import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: "",
        checked: false
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })
    }
    render() {
        return (
            <div className="addItem">
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="Add Item..."></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;