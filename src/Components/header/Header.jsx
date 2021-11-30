import React from 'react';
import  '../header/header.style.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../assets/crown.svg';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../Cart-DropDown/Cart-dropdown';


const Header = ({currentUser , hidden }) => {
    return(
        <>
                <div className="header container-fluid bg-light">
                    
                    <Link to='/home'>
                        <Logo className="logo" />
                    </Link>
                    <div className="options">
                        <Link className="option" to='/shop'>Shop</Link>
                        <Link className="option" to='/category'>Category</Link>
                        <Link className="option" to='/contact' >Contact Us</Link>
                        <Link className="option" to='/signin'>Login</Link>
                        <CartIcon/>
                    </div>
                    { hidden ? null : <CartDropdown/>}
                </div>
        </>
    )
}

const mapStateToProps = ({user:{ currentUser }, cart:{ hidden }}) => ({
    currentUser,
    hidden,
})

export default connect(mapStateToProps) (Header);