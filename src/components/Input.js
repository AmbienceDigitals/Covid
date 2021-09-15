import React, {useState} from 'react';
import './Input.css';
import {useDispatch} from 'react-redux';
import {saveTodo} from '../features/todoSlice'

const Input = () => {
    // using react useState
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    // function to add input to todo list
    const addTodo = () => {
        console.log(`adding ${input}`);
        // setInput to empty string
        setInput('');
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now(),
        }))
    }
    return (
        <div className='input'>
            <input type='test'
            value={input}
            onChange={(e) => setInput(e.target.value)}>
            </input>
            <button onClick={addTodo}>
                Add
            </button>
        </div>
    )
}

export default Input;
