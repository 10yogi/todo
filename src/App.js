import React from 'react';

import './App.css';


class Tablehead extends React.Component{
 
  render(){
      return(
          <h>sno    name            time     done    delete</h>
      );
  }
}

class Task extends React.Component{  
 
  render(){
      return(
          <li>
          <div>
          <h>{this.props.sno+1} { this.props.name}</h>
              <h>{this.props.done?"yes":"no"}</h>
              <button onClick = {this.props.removeTask(this.props.sno)}>delete</button>
          </div>
             
          </li>
      );
  }
}
class TaskList extends React.Component{
  constructor(props){
      super(props);
      this.removeTask = this.props.removeTask.bind(this);
  }
  
  render(){
      return (<ul>{ this.props.tasks.map((task,index)=>
          <Task key={index} sno = {index} name = {task.name} deadline = {task.deadline} done = {task.done} removeTask = {this.removeTask}/>
      )}</ul>);
  }
  
}
class Board extends React.Component {
  constructor(props){
      super(props);
      this.state ={
            name:'',
            deadline : new Date().toLocaleDateString(),
          tasks : [
            {
            name :"abcc",
            deadline: new Date().toLocaleDateString(),
            done : false
          },{
            name :"cc",
            deadline: new Date().toLocaleDateString(),
            done : true
          }
        ]
      };    
      this.nameChange = this.nameChange.bind(this);
      this.dateChange = this.dateChange.bind(this);
      this.addTask = this.addTask.bind(this); 
      this.removeTask = this.removeTask.bind(this);
  }  
  dateChange(event){
    let tst = {date : event.target.value.toLocaleDateString()};
    this.setState(state=>(tst));
    event.preventDefault();
  }
  nameChange(event){
    let tst = {name : event.target.value};
    this.setState(state=>(tst));
    event.preventDefault();
  }
  addTask = (event)=>{
      this.setState( state =>({
          tasks : this.state.tasks.concat({
            name : this.state.name,
            deadline: this.state.deadline,
            done: false
          })
      }))
      event.preventDefault();
  }
  removeTask(index){
      this.state.tasks.splice(index,1);
      this.setState(state=>({
          tasks : state.tasks
      }));
  }
  render(){
  return (
      <div>
          <header className = "Board-header">ToDo</header>
          <input type="text" value= {this.state.name} onChange = {this.nameChange}></input>
          <input type="date" value= {this.state.deadline} onChange= {this.dateChange}></input>
          <button value = "addtask" onClick = {this.addTask}></button>
          <Tablehead />
         
          <TaskList tasks = {this.state.tasks} removeTask = {this.removeTask}/>
      </div>
         
   );
}
}

function App() {
  return (
    <Board/>
  );
}

export default App;
