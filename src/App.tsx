import React ,{useState}from 'react';
import "./App.css"
import InputFeild from './components/InputFeild';
import { Todo } from './model';
import TodoList from './components/TodoList'


const App:React.FC = () => {  //this is a functional component providing the type of FC
 const [todo,setTodo]=useState<string>("") ;  //we can use string[](for array) or <string  | number> for either of string or number  
 const [todos,setTodos]=useState<Todo[]>([]); //this is how you create an array of a type or interface
 
 const handleAdd =(e:React.FormEvent) => {
  e.preventDefault();
  if(todo){
    setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);  //id we are giving through date
    setTodo("")
  }

 }
 return <div className='App'>
    <span className='heading'>Taskify</span>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
}


export default App;
