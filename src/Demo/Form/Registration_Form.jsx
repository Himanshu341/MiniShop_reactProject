import React , {useState} from 'react';
import './demoform.css';
import Button from '@material-ui/core/button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const RegistrationForm = ( ) => {

    const [userRegister , setuserRegister] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: ''
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value);

        setuserRegister({...userRegister , [name]:value});
    }

    const [records , setRecords] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newData = {...userRegister , id: new Date().getTime().toString()}
        setRecords([...records , newData]);

        setuserRegister({fullname:'' , email:'' , phone:'' , password:''});

    }
    return(
        <>
            <Paper>
                <form action="" onSubmit={submitForm}>
                    <h3 className='list-heading'>Registration Form</h3>

                    <div className="form-group">
                        <TextField id="standard-basic" label="fullname" 
                        name='fullname'
                        onChange={handleInput}
                        value={userRegister.fullname}  
                        variant='outlined'/>
                    </div>
                    <div className="form-group">
                        <TextField id="standard-basic" label="email"      
                        name='email'
                        onChange={handleInput}
                        value={userRegister.email}  
                        variant='outlined'/>
                    </div>
                    <div className="form-group">
                        <TextField type='number' id="standard-basic" label="phone" 
                        name='phone'
                        onChange={handleInput}
                        value={userRegister.phone}  
                        variant='outlined'/>
                    </div>
                    <div className="form-group">
                        <TextField id="standard-basic" type='password' label="password"
                        name='password'
                        onChange={handleInput}
                        value={userRegister.password}  
                        variant='outlined'/>
                    </div>
                    <Button  type='submit' variant='contained'>Register</Button>

                </form>
                <Paper elevation={3} variant='outlined'>
                    <div className='showDetails'>
                        {
                            records.map((curElem) => {
                                return(
                                    <>
                                        <div className='user-detail'>
                                            <h3 className='list-heading'>{curElem.fullname}</h3>
                                            <h3 className='list-heading'>{curElem.email}</h3>
                                            <h3 className='list-heading'>{curElem.phone}</h3>
                                            <h3 className='list-heading'>{curElem.password}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </Paper>
            </Paper>
        </>
    )
}

export default RegistrationForm;