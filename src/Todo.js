import axios from 'axios';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoNumber from './components/TodoNumber';
import { useEffect ,useState } from 'react';


function Todo() {

  // an array of objects, each object representing a todo item with three fields
  // id, item, and completed
  const [todos, setTodos] = useState([]);  

  useEffect(() => {

    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/todo');
        const data = response.data;
        setTodos(data);
      } catch (error){
        console.log(error);
      }
    }
    fetchTodos();
  } 

, []);

// mongodb+srv://skylerrsimpson:Arubaito2@cluster0.kfhmj.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0


 return (
 <div className='todos'>
  <TodoInput todos={todos} setTodos={setTodos} /> 
  <TodoList todos={todos} setTodos={setTodos} />
  <TodoNumber todos={todos}/>
  </div>   
  ); 
}

export default Todo;

