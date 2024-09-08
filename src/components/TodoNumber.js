import TodoList from "./TodoList";

function TodoNumber( {todos} ) {
  return (
    <div className="footer">
    <span className="count">
    {todos.filter((todo) => todo.completed === false).length} items left
    </span>
    </div>

  );
}

export default TodoNumber;