import { Checkbox } from '@material-ui/core';
import React from 'react';
import './TodoItem.css';
import {useDispatch} from 'react-redux';
import {setCheck, deleteTodo} from '../features/todoSlice'

const TodoItem= ({name, done, id, uniqueId}) => {
    const dispatch = useDispatch()
    const handleCheck= () => {
        dispatch(setCheck(id))
    }
    return (
        <div className='todoItem'>
        <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
            <p
            className={done && 'todoItem--done'} onClick={() => dispatch(deleteTodo({name, done, id, uniqueId}))}>{name}</p>

        </div>
    )
}

export default TodoItem
