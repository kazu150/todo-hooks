import React, { useState, useReducer } from 'react';
import TodoList from './TodoList';
import FormDialog from './FormDialog';

export const TodoContext = React.createContext()

const App = () => {
  const [status, setStatus] = useState('未着手');
  const [open, setOpen] = useState(false);
  
  const createData = (id, title, limit, createdAt, updatedAt, description, status) => {  
    return { id, title, limit, createdAt, updatedAt, description, status };
  }


  const initialState = {
    rows: [
      createData(5, '起きる', '2020-12-28', '2020-12-20', '2020-12-28', 'うううううううううううううううううううう', '未着手'),
      createData(4, '宿題をやる', '2020-12-28', '2020-12-18', '2020-12-22', 'えええええええええええええええええ', '未着手'),
      createData(3, '歯をみがく', '2020-12-28', '2020-12-16', '2020-12-21', 'んんんんんんんんんんんんんんんんんんん', '未着手'),
      createData(2, 'ご飯を作る', '2020-12-28', '2020-12-12', '2020-12-20', 'ぱぱぱぱぱささささささささいいいいいえええええ', '未着手'),
      createData(1, '洗濯する', '2020-12-28', '2020-12-10', '2020-12-19', 'あおあおあおあおあおおあおあおあおあおあおあおあ', '未着手'),
    ],
    selectedTodo: {
      title: '',
      limit: '',
      createdAt: '',
      updatedAt: '',
      status: '',
      discription: '',
      id: ''
    }

  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'create_row':
        return {
          ...state,
          rows: [ ...state.rows, action.payload]
        }
      case 'update_row':
        return {
          ...state,
          rows: action.payload
        }
      case 'delete_row':
        return {
          ...state,
          rows: action.payload
        }
      case 'set_selectedTodo':
        return {
          ...state,
          selectedTodo: action.payload
        }
      case 'update_selectedTodo':
        return {
          ...state,
          selectedTodo: { ...state.selectedTodo, ...action.payload }
        }
      case 'clear_selectedTodo':
        return {
          ...state,
          selectedTodo: initialState.selectedTodo
        }
      default: 
        return;
    }
  }

  const [ state, dispatch ] = useReducer(reducer, initialState)
  
    
  return (
    <TodoContext.Provider 
      value={{
        open, 
        setOpen, 
        status, 
        setStatus,
        state,
        dispatch
      }} 
    >
      <div className="App">
        <TodoList />
        <FormDialog />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
