import React , { useState } from 'react';
import {Spring} from 'react-spring';
import { useSelector , useDispatch } from 'react-redux';
import './todoList.css'
import {addListItem , deleteListItem , removeList} from './todo-redux/todolist.action';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import { InputAdornment } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import {FcRules} from 'react-icons/fc';
import {IoAddCircle} from 'react-icons/io5';



 const TodoListApp = () => {
    
    const [inputData , setinputData] = useState('');
    const listItems = useSelector((state) => state.todolist.listItems)
    const dispatch = useDispatch();
    
    return(
        <>
            <div className="todolist">
                <Paper elevation={10}>               
                    <h3 className='list-heading'>ToDo List <FcRules/></h3>

                    <div className="todo-Section">

                        <figure>
                            <fieldset className='title'>Add Your List Here</fieldset>
                        </figure>
                        <div className="addlist-input">
                            <FilledInput
                                className="standard-input"
                                label="Username"
                                type="text"
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton color='secondary'>
                                            <IoAddCircle id='icon' fontSize='large' 
                                            onClick={() => dispatch(addListItem(inputData) , setinputData(''))}/>
                                        </IconButton>
                                    </InputAdornment>}
                                autoComplete="current-username"
                                value={inputData}
                                onChange={(event)=>setinputData(event.target.value)}
                            />
                        </div>
                        <br />
                        <div className="list-items">
                                {
                                    listItems.map((elem)=>{
                                        return(
                                            <div className="showitems" key={elem.id}>
                                                <h3>{elem.items}</h3>
                                                <DeleteIcon id='icon' onClick={() => dispatch(deleteListItem(elem.id))}/>
                                            </div>
                                        )
                                    })
                                }

                        </div> 
                
                        <Button color='primary'  variant='contained'onClick={() => dispatch( removeList())}>Remove List</Button> 
                    </div>
                </Paper>

            </div>  
        </>
    )
} 

export default TodoListApp;