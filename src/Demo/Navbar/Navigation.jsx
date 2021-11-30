import React, { useState } from 'react';
import './navigation.css';
import {connect} from 'react-redux';
import CartDropdown from '../../Components/Cart-DropDown/Cart-dropdown';
import CartIcon from '../../Components/cart-icon/Cart-icon';
import {Link} from 'react-router-dom';
import {IoPersonCircleOutline} from 'react-icons/io5';
// import {BiShoppingBag} from 'react-icons/bi';
import {GrMenu} from 'react-icons/gr';
import {ReactComponent as Logo} from '../../Components/assets/crown.svg';


const Navigation = ({currentUser , hidden }) => {
    const [showMobileMenu , setMobileMenu ] = useState(false)
    return(
        <>
            <nav className='main-nav fixed-top'>

                {/* 1st hamburger Part */}
                <div className="hamburger-menu">
                        <a href="" onClick={(e) => 
                            {
                                e.preventDefault();
                                setMobileMenu(!showMobileMenu)
                            }}>
                            <GrMenu/>
                        </a>
                </div>

                {/* 2nd logo Part */}

                <div className="logo">
                    <Link to='/'><Logo /></Link>
                </div>

               {/* 3rd Menu Part */}
               <div className={ showMobileMenu ? 'menu-link mobile-menu-link' : 'menu-link'}>               
                   <ul>
                       <li><Link to='/shop'>SHOP</Link></li>
                       <li><Link to='/about'>ABOUT</Link></li>
                       <li><Link to='/contact'>CONTACT</Link></li>
                   </ul>
               </div>

               {/* 4th social media link */}
               <div className="social-media">
                    <ul className="social-media-desktop">
                        <li><CartIcon/></li>
                    </ul>
               </div>
               <div id="login">
                    <Link to='login'><IoPersonCircleOutline/></Link>
               </div>
            </nav>
            { hidden ? null : <CartDropdown/>}
            {/* new section */}

            {/* <section className='hero-section'>
                <p>Welcome to </p>
                <h1>Home Page</h1>
            </section> */}
        </>
    )
}


const mapStateToProps = ({user:{ currentUser }, cart:{ hidden }}) => ({
    currentUser,
    hidden,
})


export default connect(mapStateToProps)(Navigation);