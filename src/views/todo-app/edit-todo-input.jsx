import { useState } from "react";

const EditTodoInput = ({ editTodo, id, todoText }) => {
  const [todo, setTodo] = useState(todoText);



  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        type="text"
        className="todo-input"
        value={todo}
        onChange={(e) => {
            setTodo(e.target.value)
        }}
        placeholder="Görev giriniz"
      />
      <button className="add-btn"
       onClick={() => {
        editTodo(id, todo)
       }}
      >Güncelle</button>
    </div>
  );
};

export { EditTodoInput };
