import React, { useState } from 'react';
import TodoList from './TodoList';
import FormDialog from './FormDialog';

export const TodoContext = React.createContext()

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState({
    title: '',
    limit: '',
    createdAt: '',
    updatedAt: '',
    status: '',
    id: ''
  });
  const [status, setStatus] = useState('未着手');
  
  function createData(id, title, limit, createdAt, updatedAt, description, status) {  
    return { id, title, limit, createdAt, updatedAt, description, status };
  }
  
  const [ rows, setRows ] = useState([
    createData(1, '洗濯する', '2020-12-28', '2020-12-28', '2020-12-28', 'あおあおあおあおあおおあおあおあおあおあおあおあ', '未着手'),
    createData(2, 'ご飯を作る', '2020-12-28', '2020-12-28', '2020-12-28', 'ぱぱぱぱぱささささささささいいいいいえええええ', '未着手'),
    createData(3, '歯をみがく', '2020-12-28', '2020-12-28', '2020-12-28', 'んんんんんんんんんんんんんんんんんんん', '未着手'),
    createData(4, '宿題をやる', '2020-12-28', '2020-12-28', '2020-12-28', 'えええええええええええええええええ', '未着手'),
    createData(5, '起きる', '2020-12-28', '2020-12-28', '2020-12-28', 'うううううううううううううううううううう', '未着手'),
  ])
  const [open, setOpen] = useState(false);


  
  return (
    <TodoContext.Provider value={{rows, setRows, open, setOpen, selectedTodo, setSelectedTodo, status, setStatus}} >
      <div className="App">
        <TodoList rows={rows} />
        <FormDialog />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
