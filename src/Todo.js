import React, { useContext } from 'react';
import { TodoContext } from './App'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

const Todo = () => {
    const {rows, setRows} = useContext(TodoContext)

    const deleteTodo = (id) => {
        setRows(rows.filter(item => id !== item.id))
    }

    return (
        <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id} onClick={() => deleteTodo(row.id)}>
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