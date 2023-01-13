import { Button } from "./basic";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";

function TodoItem(props) {
  const { todo, setTodos } = props;

  const completeTodo = async (id) => {
    const todoDocRef = doc(db, "todos", id);
    await updateDoc(todoDocRef, {
      active: true,
    });
  };

  const imcompleteTodo = async (id) => {
    const todoDocRef = doc(db, "todos", id);
    await updateDoc(todoDocRef, {
      active: false,
    });
  };

  const deleteTodo = async (id) => {
    const todoDocRef = doc(db, "todos", id);
    await deleteDoc(todoDocRef);
  };

  return (
    <>
      <li className="flex">
        <div className={todo.active ? "todo" : ""}>{todo.todo}</div>
        {todo.active === true ? (
          <Button
            children="未完了"
            clickFunc={() => imcompleteTodo(todo.id)}
            className="btn"
          />
        ) : (
          <Button
            children="完了"
            clickFunc={() => completeTodo(todo.id)}
            className="btn"
          />
        )}
        <Button
          children="削除"
          clickFunc={() => deleteTodo(todo.id)}
          className="btn"
        />
      </li>
    </>
  );
}

export default TodoItem;
