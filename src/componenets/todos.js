import React, {Component} from 'react';
import TodoItem from "./todoItem";
import propTypes from "prop-types";
import AddTodo from "./addTodo"

class Todos extends Component{

    onChangeTitle=(e)=>{
        this.props.onChangeTitle(e.target.value,this.props.id)
    }

    render(){
        return( 
            <div className="flex-1 flex-col m-4 max-w-lg min-w-lg justify-center bg-gray-200 p-4 shadow rounded-lg">
            
            <input 
                type="text"
                className="text-center text-gray-700 font-bold text-4xl bg-gray-200"
                onChange={this.onChangeTitle}
                value={this.props.title}
            />
            <AddTodo addTodo={this.props.addTodo}/>
            {this.props.items.map((item,index)=>(
                <TodoItem key={index} todo={item} onCheckboxClicked={this.props.onCheckboxClicked} onClickBtn={this.props.onClickBtn}/>
                )) } 
            </div>
       )
    }
}

Todos.propTypes={
    items: propTypes.array.isRequired,
    onCheckboxClicked: propTypes.func.isRequired,
    onClickBtn: propTypes.func.isRequired,
    id: propTypes.number.isRequired,
    onChangeTitle: propTypes.func.isRequired
}

export default Todos