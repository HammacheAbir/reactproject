import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from "./componenets/todos"
import Header from "./Layout/header"
import AddTodo from "./componenets/addTodo"
import  {v4 as uuid} from 'uuid'
import About from './pages/about'
import axios from "axios"
import AddList from "./componenets/addList"

class App extends Component{

  state={
    todos: [],
    n: 0,
    titles:[]
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

  onAddList=(title)=>{
    this.setState({titles: [...this.state.titles, title]})
    this.setState({n: this.state.n + 1})
  }

  onChangeTitle=(newTitle,index)=>{
    this.setState({titles: Array.from(this.state.titles).map((title,id)=>{
      if(id===index){
          title=newTitle
      }
    })})

  }

  render(){
    return(
      <Router>
        <div>
          <Header/> 
          <AddList addNewList={this.onAddList}/>
          <Route exact path='/' render={props =>(
            <div>
              <div className=" inline-flex">
                {
                    Array.from(this.state.titles).map((title,index)=>(
                      <Todos 
                        onChangeTitle={this.onChangeTitle}
                        id={index}
                        key={index} 
                        title={title} 
                        addTodo={this.addTodo} 
                        items={this.state.todos} 
                        onCheckboxClicked={this.onCheckboxClicked} 
                        onClickBtn={this.onClickBtn}
                      />
                    ))
                }
              </div>
            </div>
          )}/>
          <Route path='/about' component={About}/>
          </div>
      </Router>
      
    )
  }
}

export default App;
