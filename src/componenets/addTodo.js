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
                    type="text" 
                    name="value"
                    placeholder="Add a task" 
                    style={{flex:10, padding:'5px' }} 
                    value={this.state.value} 
                    onChange={this.onChangeValue}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    style={{flex:1, display:'inline-block', background:"#555", color:"#fff", cursor:'pointer'}}
                    
                />
            </form>
        )
    }
}

export default AddTodo
