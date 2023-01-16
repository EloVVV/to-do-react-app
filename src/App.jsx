import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [skills, setSkills] = useState(['Front-End', 'Back-End', 'CI/CD']);


  const[form, setForm] = useState({
    email: "",
    password: "",
  });


  const onChangeHandle = (e) => {
    setName(e.target.value);
    setCount(e.target.value.length);
  }

  const onSubmitAddSkill = (e) => {

    if(e.keyCode === 13) {
      setSkills((prevState) => {
        return [...prevState, e.target.value];
      });
    }
  }

  const onChangeFormHandle = (e) => {
    setForm((prevState) => {
      prevState = {...prevState};
      
      prevState[e.target.name] = e.target.value;

      return prevState;
    });
  }

  return (
    <div>
      <p>Вы нажали на меня {count} раз(а)</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    
      <br />

      <h1>Привет, {name}</h1>
      <input type="text" onChange={(e) => onChangeHandle(e)} name="" id="" />
    
      <input type="text" onKeyDown={(e) => onSubmitAddSkill(e)} name="" id="" />
      <ul>
        {
          skills.map((skill) => {
            return (
              <li>{skill}</li>
            );
          })

          // skills.map((skill) => <li>{skill}</li>);
        }
      
      </ul>

      <br />

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email:</label>
        <input type="email" name="email" id="" onChange={(e) => onChangeFormHandle(e)} value={form.email}/>

        <label>Password:</label>
        <input type="password" name="password" id="" onChange={(e) => onChangeFormHandle(e)} value={form.password}/>
        
        <button>Отправить форму</button>
      </form>
    
    
    </div>
  )
}

export default App