import { RxCross2 } from "react-icons/rx";
import { GoCheckCircle } from "react-icons/go";
import { GoCircle } from "react-icons/go";
import axios from "axios";

function TodoListItem({index, todo, todos, setTodos}) {

  const handleDelete = async () => {
    try {
      // step 1: find the id given the index of a todo item
      const id = todos[index]._id;
  
      // step 2: delete this todo from the backend with string interpolation
      const response = await axios.delete(`http://localhost:8000/todo/${id}`);
  
      // step 3 if step 1 is successful, delete this todo from the frontend
      if (response.status === 204) {
        const newTodos = todos.filter((todo, i) => {
          return  i !== index ;
       });
       setTodos(newTodos);
      }
  
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };

  const updateTodoServer = async (id, completed) => {
    const response = await axios.patch(`http://localhost:8000/todo/${id}`, 
      {completed: !completed, });
      return response.data;
  }

  const handleToggle = async (event) => { 
    try {
    // step 1: find the id given the index of a todo item 
    //         find the completed status of this todo item
    const id = todos[index]._id;
    const completed = todos[index].completed;

    // step 2: update this todo item in the backend
    const updatedTodoObject = await updateTodoServer(id, completed);

    // step 3: if step 2 is successful update this todo item in the front end
    setTodos(todos.map((individualTodo, individualIndex) => {
      if (individualIndex === index) {
        return updatedTodoObject;
      } else {
        return individualTodo;
      }
    }));

    } catch (error) {
      
    }

  }

  return (
    <li>
    <button onClick={handleToggle}>
    {todo.completed ? (<GoCheckCircle color='green' size={25} /> ): (<GoCircle color='#e6e6e6' size={25} />)}
    </button>
    <label className={todo.completed ? 'deleted' : 'regular'}>{todo.item}</label>
    <button className="delete-button" onClick={handleDelete} >
    <RxCross2 color='#cc9a9a' /> 
    </button> 
   </li>
  )
}

export default TodoListItem;