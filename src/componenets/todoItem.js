import React, { Component } from 'react'
import propTypes from "prop-types";

export class TodoItem extends Component {

    getStyle= ()=>{
        return{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            textDecoration: this.props.todo.completed? 'line-through' : 'none'  
        }
    }

    render() {
        const {id,title}=this.props.todo;
        return (
            <div>   
                <p style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.onCheckboxClicked.bind(this,id)}/>
                     {title}
                    <button style={btnStyle} onClick={this.props.onClickBtn.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }

    
}

TodoItem.propTypes={
    todo: propTypes.object.isRequired,
    onCheckboxClicked: propTypes.func.isRequired,
    onClickBtn: propTypes.func.isRequired
}

const btnStyle={
        backgroundColor:'#ff0000',
        color:'#fff',
        border:'none',
        borderRadius:'50%',
        cursor:'pointer',
        float:'right'
}

export default TodoItem
