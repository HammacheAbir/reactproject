import React, { Component } from 'react'
import propTypes from "prop-types";

export class TodoItem extends Component {

    getStyle= ()=>{
        return{
            textDecoration: this.props.todo.completed? 'line-through' : 'none'  
        }
    }

    render() {
        const {id,title}=this.props.todo;
        return (
            <div className="bg-white p-3 overflow-scroll h-13 ... flex-row object-center rounded mt-2 mb-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">  
                    <p style={this.getStyle()}>
                        <input checked={this.props.todo.completed? true : false} type="checkbox" className="form-checkbox h-4 w-5 text-teal-600" onChange={this.props.onCheckboxClicked.bind(this,id)}/>
                        {' '}
                        {title}
                        <button className="w-8 h-8  bg-red-600 hover:bg-red-700 content-center float-right m-2  rounded-full focus:outline-none focus:shadow-outline pb-1 shadow" onClick={this.props.onClickBtn.bind(this,id)}>x</button>
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
        float:'right',
        padding: '1px 7px 1px 7px'

}

export default TodoItem
