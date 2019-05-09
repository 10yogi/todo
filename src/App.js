import React from 'react';

import './App.css';



class TaskList extends React.Component{
  constructor(props){
      super(props);
  }
  
  render(){
      return (
        <div> 
        sno   name    deadline    done
        <ul>
          {
           this.props.tasks.map((task,index)=>
             <li>
              <div>
                {index+1} { task.name}  { task.deadline}{task.done?" yes ":" no "}
                <button onClick = {()=>this.props.removeTask(index)}>delete</button>
              </div>        
            </li>
            )
          }
        </ul>
        </div>
      );
  }
  
}
class Board extends React.Component {
  constructor(props){
      super(props);
      this.state ={
            name:'',
            deadline : new Date().toLocaleDateString(),
          tasks : [ ]
      };    
      this.nameChange = this.nameChange.bind(this);
      this.dateChange = this.dateChange.bind(this);
      this.addTask = this.addTask.bind(this); 
      this.removeTask = this.removeTask.bind(this);
  }  
  dateChange(event){
    let tst = {deadline : event.target.value};
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
          <button value = "addtask" onClick = {this.addTask}>add</button>
       
         
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
