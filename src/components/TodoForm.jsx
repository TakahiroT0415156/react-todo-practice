import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { Button, Input } from "./basic";

function TodoForm(props) {
  const { todos, setTodos } = props;
  const [inputTodo, setInputTodo] = useState("");
  const changeInputTodo = (e) => setInputTodo(e.target.value);

  const postBtn = () => {
    if (!inputTodo) return;
    addDoc(collection(db, "todos"), {
      todo: inputTodo,
      active: false,
    });
    setInputTodo("");
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Todoを入力"
        value={inputTodo}
        onChange={changeInputTodo}
        className="form"
      />
      <Button children="送信" clickFunc={() => postBtn()} className="btn" />
    </>
  );
}

export default TodoForm;
