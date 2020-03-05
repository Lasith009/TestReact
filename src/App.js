import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component{
  state={
    todos:[
      {
          id: uuidv4(),
          //id: 1,
          title: 'Get to the gym',
          completed: false
      },
      {
        id: uuidv4(),
        //id: 2,
        title: 'Get ready the breaskfast',
        completed: false
    },
    {
        id: uuidv4(),
        //id: 3,
        title: 'Get ready to go to work',
        completed: false
    }   
    ]
}

//toggle complete
markComplete = (id) =>{
  this.setState({ todos: this.state.todos.map( todo => {
    if(todo.id === id){
      todo.completed =!todo.completed
    }
    return todo;
  })});
}

//delete todo
delTodo = (id) =>{
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !==id)] });
}

//add todo
addTodo = (title) => {
  const newTodo ={
    id: uuidv4(),
    //id: 4,
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]});
}

  render(){
    return (
      <Router>
        <div className="App">
          <div className="Container">
            <Header/>
            <Route path="/" render={props =>(
              <React.Fragment>
                  <AddTodo addTodo= {this.addTodo}/>
                  <Todos todos={this.state.todos} 
                  markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div> 
        </div>
      </Router>
    );
  }
}


export default App;
