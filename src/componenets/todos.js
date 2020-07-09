import React, {Component} from 'react';
import TodoItem from "./todoItem";
import propTypes from "prop-types";
import AddTodo from "./addTodo"

class Todos extends Component{

    render(){
        return( 
            <div className="flex-1 flex-col m-4 max-w-lg min-w-lg justify-center bg-gray-200 p-4 shadow rounded-lg">
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
    onClickBtn: propTypes.func.isRequired
}

export default Todos