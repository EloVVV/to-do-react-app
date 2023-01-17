import { useState } from "react";


const TodoHeader = ({ setTodos }) => {

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

    return (
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
    );
}

export default TodoHeader;