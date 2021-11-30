import React ,{Component} from 'react';
import './signup.style.css';

import FormInput from '../form-input/Form-input';
import Button from '@material-ui/core/button';

class SignUp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName , email , password , confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("Password Don't Match");
            return;
        }
    }
    handleChange = (event) => {
        
        const {value ,name} = event.target.value ;

        this.setState({ [name] : value});
    } 
    
    render() {
        const {displayName , email , password , confirmPassword} = this.state;
        return(
            <>
                <div className="sign-up">
                    <h2 className="title">I do Not Have An Account</h2>
                    <span>Sign up with your email-id and password.</span>
                    
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <FormInput
                            type= 'text'
                            name="Display Name"
                            onChange={this.handleChange}
                            label= 'Display Name'
                            required
                        />
                        <FormInput
                            type= 'email'
                            name="Email"
                            onChange={this.handleChange}
                            label= 'Email'
                            required
                        />
                        <FormInput
                            type= 'password'
                            name="Password"
                            onChange={this.handleChange}
                            label= 'Password'
                            required
                        />
                        <FormInput
                            type= 'password'
                            name="Confirm Password"
                            onChange={this.handleChange}
                            label= 'Confirm Password'
                            required
                        />
                        <Button variant='contained' type="submit" id="signup"> Sign Up </Button> 

                            
                    </form>
                </div>
            </>
        )
    }
}

export default SignUp;