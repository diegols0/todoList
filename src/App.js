import React, { useState } from "react";


import Title from "./style/style";

function Task({add, index, tasks, setTasks, excluirItem}) {
  const [checked,setChecked] = useState(false);

  return (
    <>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}></input>
      <p id="text" style={{textDecoration:checked ? "line-through" : ""}}>{ add }</p>
      <button>edit</button>
      <button onClick={() => excluirItem(index)}>X</button>
    </>
  )
}

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  

  function adicionaList(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    console.log(task);
  }

  function excluirItem(index) {
    let excluir = tasks;
    excluir = excluir.filter((element, indexId) => index !== indexId);
    //console.log(excluir)
    setTasks([...excluir]);
  }

 

  return (
    <body>
      <div className="App">
        <Title>TO-DO-LIST</Title>
        <form onSubmit={adicionaList}>
          <input type="text" onChange={(e) => setTask(e.target.value)}></input>
          <input type="submit" value="+"></input>
        </form>
        {tasks.map((add, index) => {
          return (
            <Task key={index} add={add} index={index} tasks={tasks} setTasks={setTasks} excluirItem={excluirItem}>
            </Task>
          )
        })}
        <button>Remove Checked</button>
      </div>
    </body>
  );
}

export default App;
