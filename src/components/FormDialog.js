import React, { useContext, useState } from 'react';
import {TodoContext} from './App';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = () => {
    const { rows, setRows, open, setOpen, selectedTodo, setSelectedTodo } = useContext(TodoContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedTodo({})
    };

    const onTodoSubmit = (e) => {
        const date = new Date()
        const formattedDate = 
        date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
        e.preventDefault();
        if ( selectedTodo.title === '') {
            alert ('タイトルを入力してください')
            return;
        };

        

        if(selectedTodo.id){
            const newRows = rows;
            newRows[selectedTodo.id-1] = selectedTodo;
            setRows(newRows)

        } else {
            setRows([...rows, { 
                id: rows.length + 1, 
                title: selectedTodo.title, 
                limit: formattedDate, 
                status: '未着手'
            }]);
        }        

        setSelectedTodo({});
        handleClose();
    }

    const onTodoDelete = () => {
        setRows(rows.filter(row => row.id !== selectedTodo.id))
        handleClose()
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                TODOを登録する
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">TODO</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        TODOを編集します
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="タイトル"
                        type="text"
                        value={selectedTodo.title}
                        onChange={e => setSelectedTodo({
                            ...selectedTodo,
                            title: e.target.value
                        })}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="limit"
                        label="期限"
                        type="text"
                        value={selectedTodo.limit}
                        onChange={e => setSelectedTodo({
                            ...selectedTodo,
                            limit: e.target.value
                        })}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="status"
                        label="状態"
                        type="text"
                        value={selectedTodo.status}
                        onChange={e => setSelectedTodo({
                            ...selectedTodo,
                            status: e.target.value
                        })}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        キャンセル
                    </Button>
                    {
                        selectedTodo.id ?
                        <Button onClick={onTodoDelete} color="secondary">
                            削除
                        </Button> : ''
                    }
                    <Button onClick={onTodoSubmit} color="primary">
                        追加
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;