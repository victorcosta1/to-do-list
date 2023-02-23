/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState([])
  const [input, setInput] =  useState()

  function handleAdd(){
    setTask([...task, input])
  }

  function handleDel(){
    setTask([]).remove()
  }

  

  return (
    <div className="App">
      <h1>Tarefas</h1>

      <div>
        <input type='text' value={input} placeholder='Digite algo aqui...' onChange={e => setInput(e.target.value)}/>
        <button type='button' onClick={handleAdd}>Enviar</button>
      </div>

      {task.map(task => (
        <div id='task_value'>
          <span key={task}>{task} <button id='btn-del' type='button' onClick={handleDel}>Excluir</button></span>
        </div>
      ))}


    </div>
  );
}

export default App;
