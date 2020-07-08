import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from "./componenets/todos"
import Header from "./Layout/header"
import AddTodo from "./componenets/addTodo"
import  {v4 as uuid} from 'uuid'
import About from './pages/about'
import axios from "axios"

class App extends Component{

  state={
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res=>this.setState({todos: res.data}))
  }

  onCheckboxClicked=(id)=>{
    this.setState({ todos: this.state.todos.map((todo)=>{
      if(todo.id === id){
         todo.completed=!todo.completed
      }
      return todo
    })})
  }

  onClickBtn=(id)=>{

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({ todos: this.state.todos.filter(todo=> todo.id!== id)}))
  }

  addTodo= (value)=>{

    axios.post('https://jsonplaceholder.typicode.com/todos/',{
      title: value,
      completed: false
    }).then(res=>this.setState({todos: [...this.state.todos, res.data]}))
  }

  render(){
    return(
      <Router>
        <div>
          <Header/> 

          <Route exact path='/' render={props =>(
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos items={this.state.todos} onCheckboxClicked={this.onCheckboxClicked} onClickBtn={this.onClickBtn}/>
            </React.Fragment>
          )}/>

          <Route path='/about' component={About}/>
          </div>
      </Router>
      
    )
  }
}

export default App;