import React from 'react';
import '../SignUp-SignIn/signup_signin.style.css';
import SignInPage from '../../Components/SignIn/NewSign_In';

const SignUpAndSignInPage = () => {
    return(
        <>
            <div className="sign-up-and-sign-in">
                <SignInPage/>
            </div>
        </>
    );
}

export default SignUpAndSignInPage;