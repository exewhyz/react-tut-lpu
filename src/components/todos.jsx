import { useEffect, useState } from "react"

const Todos = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const getTodos = async () =>{
      const res = await fetch(url);
      const todos = await res.json();
      setTodos(todos);
    }
    getTodos();
  },[]);

  return (
    <div>
      <h1>Todos</h1>
      {
        todos.length <= 0
          ? <h1>No Todos Found</h1> 
          : (
          <div>
            {
              todos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default Todos;
