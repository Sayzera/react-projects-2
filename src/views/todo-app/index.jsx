import { useState } from "react";
import "./styles.css";
import { TodoInput } from "./todo-input";
import { TodoItem } from "./todo-item";

/**
 * Todo her eklendiğinde scroll otomatik olarak en alta gelsin
 * CSS özelliği olarak scroll barı daha ince olsun
 * sileceğim bana emin misiniz bak siliyorum  sonra karışmam desin  
 * Ben hangi taskı ne zaman ekledim bana göstersin tarih ve saat olarak
 * Eğer task belirtilen alanın genişliğini aşıyorsa otomatik olarak alt satıra atsın /
 */

/* sileceğim bana emin misiniz bak siliyorum  sonra karışmam desin  // YAPILDI
 * Eğer task belirtilen alanın genişliğini aşıyorsa otomatik olarak alt satıra atsın // yapıldı css' de  
 * word-break: break-word; bu ve white-space: normal; bu
 */


const categories = [
  { name: "Work", color: "#2196F3" },
  { name: "Study", color: "#FF9800" },
  { name: "Sports", color: "#9C27B0" },
  { name: "Groceries", color: "#4CAF50" },
  { name: "Personal", color: "#E91E63" },
];

const defaultCategory = categories[0];

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Todo uygulaması yapacağım",
      completed: false,
      category: "Work",
      categoryColor: "#2196F3",
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState(defaultCategory.name);
  const [newCategoryColor, setNewCategoryColor] = useState(
    defaultCategory.color
  );

  const addTodo = () => {
    if (newTask.trim() != "") {
      const newTodo = {
        id: Date.now(),
        text: newTask,
        completed: false,
        category: newCategory,
        categoryColor: newCategoryColor,
      };

      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleCategoryChange = (categoryName) => {
    const selectedCategory = categories.find(
      (cat) => cat.name === categoryName
    );
    setNewCategory(categoryName);
    setNewCategoryColor(selectedCategory.color);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="todo-app">
      <div className="todo-container">
        <h1 className="todo-title">Tüm Görevler 3</h1>
        <TodoInput
          setNewTask={setNewTask}
          newTask={newTask}
          addTodo={addTodo}
          handleKeyPress={handleKeyPress}
          categories={categories}
          newCategory={newCategory}
          handleCategoryChange={handleCategoryChange}
        />

        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
