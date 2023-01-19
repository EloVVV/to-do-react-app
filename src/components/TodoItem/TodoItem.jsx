import formatDate from "../../utils/formatDate";

const TodoItem = ({setTodos, todo}) => {

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

            localStorage.setItem('todos', JSON.stringify(prevState));

            return prevState;
        });
    }
    // Удаление
    const onDeleteTodoById = (id) => {
            setTodos((prevState) => {
            prevState = [...prevState];

            // .filter()

            prevState = prevState.filter((todo) => todo.id !== id);

            localStorage.setItem('todos', JSON.stringify(prevState));
            
            return prevState;
        })
    }


    return (
         /* Задача */
         
        <div className="toDo">
            <h3>{todo.name} ({formatDate(todo.date)})</h3>
            <div className="buttons">
            <button className="access_btn" onClick={() => onCheckedToggle(todo.id)}>
                {todo.checked ? "Не выполнена" : "Выполнено"}
            </button>
            <button className="delete_btn" onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
            </div>
        </div>
          
    );
}

export default TodoItem;