import React, { useContext } from 'react';
import { TodoContext } from './App'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

const Todo = () => {
    const {rows, setRows, open, setOpen, selectedTodo, setSelectedTodo} = useContext(TodoContext)

    const onItemClicked = (id) => {
        setOpen(true)
        setSelectedTodo(rows[id - 1])
    }

    return (
        <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id} onClick={() => onItemClicked(row.id)}>
                    <TableCell align="left">{row.id}</TableCell>
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