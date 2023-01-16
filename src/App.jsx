import { useState, useEffect } from "react"

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return `${day}.${month}.${year}`;
}

const App = () => {

  const [todos, setTodos] = useState([
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
  ]);

  const [value, setValue] = useState("");

  // Обновление значения из поля
  const onChangeHandle = (e) => {
    setValue(e.target.value);
  }
  // Добавление задачи
  const onSubmitHandle = (e) => {
    e.preventDefault();

    setTodos((prevState) => {
      // Деструктуризация
      prevState = [...prevState]; 

      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false
      });

      return prevState;
    });

    setValue('');
  }


  // Переключение
  const onCheckedToggle = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked
          };
        }

        return todo;
      });

      return prevState;
    });
  }
  // Удаление
  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      // .filter()

      prevState = prevState.filter((todo) => todo.id !== id);

      return prevState;
    })
  }

  return (
    <div>
      <div className="header">
        <form onSubmit={(e) => onSubmitHandle(e)}>
          <h2>Добавить задачу:</h2>
          <input 
          type="text" 
          onChange={(e) => onChangeHandle(e)} 
          value={value}
          placeholder="Купить молоко..."/>


        </form>
      </div>

      {/* Блок с задачами */}
      <div className="toDo_box">
        {/* Задача */}
        {
          todos.map((todo) => {
            return (
              <div className="toDo">
                <h3>{todo.name} ({formatDate(todo.date)})</h3>
                <div className="buttons">
                  <button className="access_btn" onClick={() => onCheckedToggle(todo.id)}>
                    {todo.checked ? "Не выполнена" : "Выполнено"}
                  </button>
                  <button className="delete_btn" onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App
