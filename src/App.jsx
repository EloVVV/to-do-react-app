import { useState, useEffect } from "react"
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoItem/TodoItem";


const App = () => {
  const initialTodos = [
    {
      id: 1,
      name: "Купить продукты",
      date: new Date(),
      checked: false
    },
    {
      id: 2,
      name: "Купить время",
      date: new Date(),
      checked: false
    }
  ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    if(localStorage.getItem('todos') !== null) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, [todos]);

  return (
    <div>
      <TodoHeader setTodos={setTodos}/>

      {/* Блок с задачами */}
      <div className="toDo_box">
        {todos.map((todo) => <TodoItem setTodos={setTodos} todo={todo}/>)}
        {/* <TodoItem setTodos={setTodos} todos={todos}/> */}
      </div>
    </div>
  );
}

export default App
