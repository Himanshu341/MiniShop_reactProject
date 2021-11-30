import React from 'react';

import {Route, Switch , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './Pages/homepage/Homepage';
import ShopPage from './Pages/Shop/Shop';
// import SignUpAndSignInPage from './Pages/SignUp-SignIn/SignUp-SignIn';
import CheckOutPage from './Pages/checkout/Checkout';
// import Header from './Components/header/Header';
import {setCurrentUser} from './redux/user/user.action';
import SignInPage from './Components/SignIn/NewSign_In';
import SignUpPage from './Components/SignUp/NewSign_Up';
// import CollectionPage from './Pages/category/Collection';
import ContactPage from './Pages/Contactus/Contactus';
import CategoryNav from './Components/Category-Navbar/CategoryNav';
import Navigation from './Demo/Navbar/Navigation';
import SocialCards from './Demo/Social-card/Social-card';
class App extends React.Component{
    render(){
    return(
        <>
            <Navigation/>
            {/* <Header/> */}
            {/* <CategoryNav/> */}
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/category' component={CategoryNav} />
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/checkout' component={CheckOutPage} />
                <Route exact path='/signup' component={SignUpPage} />
                <Route exact path='/scard' component={SocialCards} />
                <Route exact path='/login' render = {() => this.props.currentUser ? ( <Redirect to='/' /> ) : (<SignInPage/>)} />
            </Switch>
        </>
    );
}
}
const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps ,mapDispatchToProps)(App);