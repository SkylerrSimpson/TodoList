import TodoListItem from './TodoListItem';

function TodoList({todos, setTodos }) {
  return (
    <ul className='todo-list'>
      {todos.map((todo, index) => {
      return (<TodoListItem
        key={index}
        index ={index}
        todo={todo}
        todos={todos} 
        setTodos={setTodos}
        />  
      );
      }
      )}
    </ul>
  );
}



export default TodoList;