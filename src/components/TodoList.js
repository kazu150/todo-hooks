import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Todo from './Todo';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TodoList = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Todos
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>タイトル</TableCell>
                            <TableCell align="right">期限</TableCell>
                            <TableCell align="right">状態</TableCell>
                        </TableRow>
                    </TableHead>
                    <Todo />
                </Table>
            </TableContainer>
        </>
    )
}

export default TodoList;