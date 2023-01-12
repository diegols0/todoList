import React, { useState } from "react";

function Task({add, index, tasks, setTasks, excluirItem}) {
  const [checked,setChecked] = useState(false);

  return (
    <>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}></input>
      <p id="text" style={{textDecoration:checked ? "line-through" : ""}}>{ add }</p>
      <button onClick={() => excluirItem(index)}>X</button>
    </>
  )
}

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  

  function adicionaList(e) {
    e.preventDefault();
    setTasks([...tasks, {text: task, check:false}]);
    console.log(task);
  }

  function excluirItem(index) {
    let excluir = tasks;
    excluir = excluir.filter((element, indexId) => index !== indexId);
    //console.log(excluir)
    setTasks([...excluir]);
  }

 

  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <form onSubmit={ adicionaList }>
        <input type="text" onChange={(e) => setTask(e.target.value)}></input>
        <input type="submit" value="+"></input>
      </form>
      {tasks.map((add, index) => {
        return (
        <Task key={index} add={ add } index={ index } tasks={ tasks } setTasks={ setTasks } excluirItem={ excluirItem }>
        </Task>
        )
      } )}
      <button>Remove Checked</button>
    </div>
  );
}

export default App;
