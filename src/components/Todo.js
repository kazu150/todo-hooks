import React, { useContext } from 'react';
import { TodoContext } from './App'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

const Todo = () => {
    const {rows, setRows, open, setOpen, selectedTodo, setSelectedTodo} = useContext(TodoContext)

    const onItemClicked = (id) => {
        setOpen(true)
        setSelectedTodo( ...rows.filter(row => row.id === id) )
    }

    return (
        <TableBody>
            {rows.map((row, index) => (
                <TableRow key={row.id} onClick={() => onItemClicked(row.id)}>
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                        {row.title}
                    </TableCell>
                    <TableCell align="right">{row.limit}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export default Todo;