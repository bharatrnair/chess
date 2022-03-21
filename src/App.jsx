import {useState} from "react";
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodolist] = useState([]);
  // let count= 0;
  return ( 
  <div className ="App">
  <h1>Todo App</h1>
  <input type="text" value={inputText} onChange={(event)=>{
  setInputText(event.target.value);
}}/>
<button onClick={()=>{
  setTodolist([...todoList, inputText]);
  setInputText("");
}}>Add</button>
<ul>
  {todoList.map(todo => (
    <li>{todo}</li>
  ))}
  </ul>    
  </div>
  );
}

export default App;
