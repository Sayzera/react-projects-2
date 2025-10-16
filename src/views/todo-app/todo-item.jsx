const TodoItem = ({ todo, onDelete, toggleTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <button className={`todo-checkbox ${todo.completed ? "checked" : ""}`} onClick={() => {
          toggleTodo(todo.id)
        }}>
          {todo.completed && <span className="checkmark">✓</span>}
        </button>

        <span className={`todo-text ${todo.completed ? "strikethrough" : ""} `}>
          {todo.text}
        </span>

        <span
          className="todo-category"
          style={{
            backgroundColor: todo.categoryColor,
          }}
        >
          {todo.category}
        </span>


        <button
          className="delete-btn"
          title="Delete Task"
          onClick={() => {
            const confirmation = window.confirm("Sileceğinize emin misiniz? Siliniyor, sonra karışmam!");                   // silmek için emin misin
            if (confirmation) {
              onDelete(todo.id);
            }
          }}
        >
          x

        </button>
      </div>
    </div>
  );
};

export { TodoItem };
