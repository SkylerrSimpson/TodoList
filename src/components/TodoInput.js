import { useState } from 'react'; 
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

function TodoInput( {todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleChanges = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodoServer = async (newTodoObj) => {
    const response = await axios.post('http://localhost:8000/todo', newTodoObj);
    return response.data;
  };

  const handleKeyDown = async (event) => {
    try {
      if (event.key === 'Enter' && newTodo.trim() !== '') {
        // step 1: prepare data- create a new todo object
        const newTodoObj = {
          id: uuidv4(),
          item: newTodo,
          completed: false,
        };
        // step 2: add this data to the backend
        const newTodoObjectReturned = await addTodoServer(newTodoObj);
          // step 3: if step 2 is successful, add this data to the frontend 
          setTodos([...todos, newTodoObjectReturned]);
          // step 4: clear input field
          setNewTodo('');
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
  <>
  <div className='todo-input'>
    <input type='text' placeholder='What needs to be done?' 
      value={newTodo}
      onChange={handleChanges}
      onKeyDown={handleKeyDown}
    />
  </div>
  </>
  );
}

export default TodoInput;
