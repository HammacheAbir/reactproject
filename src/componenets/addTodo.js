import React, { Component } from 'react'

export class AddTodo extends Component {

    state={
        value:''
    }

    onChangeValue=(e)=>this.setState({[e.target.name]: e.target.value})

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.value)
        this.setState({ value:''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                className="border border-transparent shadow px-4 py-2 leading-normal text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                    type="text" 
                    name="value"
                    placeholder="Add a task" 
                    style={{flex:10 }} 
                    value={this.state.value} 
                    onChange={this.onChangeValue}
                />
                <input 
                    className="w-10 h-10 bg-teal-300 hover:bg-teal-400 content-center m-2 rounded-full focus:outline-none focus:shadow-outline p-2 shadow"
                    type="submit" 
                    value="Add" 
                    style={{flex:2, cursor:'pointer'}}
                    
                />
            </form>
        )
    }
}

export default AddTodo
