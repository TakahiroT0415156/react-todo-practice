import "../index.css";
import TodoItem from "./TodoItem.jsx";

function TodoList(props) {
  const { todos, setTodos } = props;

  return (
    <>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
      })}
    </>
  );
}

export default TodoList;
