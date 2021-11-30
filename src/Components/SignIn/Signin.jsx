import React from 'react';
import FormInput from '../form-input/Form-input';
import './signin.style.css';
import Button from '@material-ui/core/Button';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: ' ',
            password: ''
        }
    }
 
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email:'' , password:''})
    }

    handleChange = (event) => {
        
        const {value ,name} = event.target.value ;

        this.setState({ [name] : value});
    }
    render() {
        return(
            <>
                <div className="sign-in">
                    <h2 className='title'>I already have an account</h2>
                    <span>Sign in with your email-id and password</span>

                    <form onSubmit= {this.handleSubmit}>
                        <FormInput name="email" 
                        type="email" 
                        handleChange={this.handleChange}
                        label= 'email'
                        required />

                        <FormInput name="password " 
                        type="password" 
                        handleChange={this.handleChange}
                        label="password" 
                        required />

                        <Button variant='contained' type="submit" id="signin"> Sign In </Button> 
                    </form>

                </div>
            </>
        );
    }
}

export default SignIn;