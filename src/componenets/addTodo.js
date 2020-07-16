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
            <form className="bg-white flex items-center rounded-full shadow-xl" onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                    type="text" 
                    name="value"
                    placeholder="Add a task" 
                    style={{flex:10 }} 
                    value={this.state.value} 
                    onChange={this.onChangeValue}
                />
                <input 
                    className="bg-blue-500 text-white m-1 rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                    type="submit" 
                    value="+" 
                    style={{ cursor:'pointer'}}
                    
                />
            </form>
        )
    }
}

export default AddTodo
