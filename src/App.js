import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import FormDialog from './FormDialog';

export const TodoContext = React.createContext()

const App = () => {
  function createData(id, title, limit, status) {  
    return { id, title, limit, status };
  }

  const [ todo, setTodo ] = useState('');
  
  const [ rows, setRows ] = useState([
    createData(1, '洗濯する', '2020/12/28', '未着手'),
    createData(2, 'ご飯を作る', '2020/12/28', '未着手'),
    createData(3, '歯をみがく', '2020/12/28', '未着手'),
    createData(4, '宿題をやる', '2020/12/28', '未着手'),
    createData(5, '起きる', '2020/12/28', '未着手'),
  ])

  const onTodoSubmit = (e) => {
    const date = new Date()
    const formattedDate = 
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    e.preventDefault();
    if (todo === '') {
      alert ('Todoを入力してください')
      return;
    };

    setRows([...rows, createData(rows.length + 1, todo, formattedDate, '未着手')]);
    setTodo('');
  }
  
  return (
    <TodoContext.Provider value={{rows, setRows}} >
      <div className="App">
        <TodoList rows={rows} />
        <FormDialog />
        <form>
          <input value={todo} onChange={e => setTodo(e.target.value)} type="text" />
          <button onClick={onTodoSubmit} >追加</button>
        </form>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
