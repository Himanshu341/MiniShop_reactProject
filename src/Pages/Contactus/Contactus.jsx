import React from 'react';
import './contactus.style.css';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/button';
const ContactPage = () => {
    return(
        <>
            <Paper>
            <div className="contact-form">
                    <h2 className="form-title">Have Some <span id='rt-clr'>Questions ?</span></h2>
                    <form>
                            <div className="form-group">
                            <TextField
                                className="standard-input"
                                label="Username"
                                type="text"
                                autoComplete="current-username"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                className="standard-input"
                                label="PassWord"
                                type="passworrd"
                                autoComplete="current-password"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                            
                                id="email"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                                variant="outlined"
                                fullWidth
                            />
                            <textarea id="textarea" aria-label="minimum height" rowsMin={3} placeholder="TextArea" fullWidth />
                            <Button variant="contained">Send</Button>
                            </div>
                    </form>
                </div>
            </Paper>
           
        </>
    )
}

export default ContactPage;
