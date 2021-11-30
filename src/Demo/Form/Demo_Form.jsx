import React , {useState} from 'react';
import './demoform.css';
import Button from '@material-ui/core/button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DemoForm = () =>{
    
    const notify = () => toast.dark('Login Successfully');


    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [newUser , setnewUser] = useState([]);

    const submitForm = (e) =>{
        e.preventDefault();

        if( email && password){

            const newEntry = { id : new Date().getTime().toString() , email, password};
            setnewUser([...newUser , newEntry]);
            console.log(newUser);

            setEmail('');
            setPassword('');
            

        }else{
            alert('please fill the data');

        }

        
    }

    return(
        <>
            <Paper>
                <form sonSubmit={submitForm}>
                    <h3 className='list-heading'>Login Form</h3>
                    <div className="form-group">
                        <TextField id="standard-basic" label="UserName" 
                            autoComplete='off'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            variant='outlined'/>
                    </div>
                    <div className="form-group">
                        <TextField id="standard-basic" label="PassWord" 
                            autoComplete='off'
                            type='password'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            variant='outlined'/>
                    </div>
                    <Button type='submit' variant='contained' onClick={notify}>Submit</Button>
                </form>

                <Paper elevation={3} variant='outlined'>
                    <div className='showDetails'>
                        {
                            newUser.map((curElem) => {
                                return(
                                    <>
                                        <div className="user-detail">  
                                            <h3 className='list-heading'>{curElem.email}</h3>
                                            <h3 className='list-heading'>{curElem.password}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                </div>
                </Paper>
            </Paper>
            <ToastContainer position='top-center' />

        </>
    )
}

export default DemoForm;