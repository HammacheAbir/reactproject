import React, {Component} from 'react';
import TodoItem from "./todoItem";
import propTypes from "prop-types";

class Todos extends Component{

    render(){
        return this.props.items.map((item,index)=>(
            <TodoItem key={index} todo={item} onCheckboxClicked={this.props.onCheckboxClicked} onClickBtn={this.props.onClickBtn}/>
       ))  
    }
}

Todos.propTypes={
    items: propTypes.array.isRequired
}

export default Todos