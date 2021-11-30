import React from 'react';
import './footer.style.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';
import { Facebook, Instagram , Twitter , GitHub  } from '@material-ui/icons';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';


const Footer = () => {
    return(
        <>
            <footer className="footer">
                
                <div className="footer-section">
                    <div className="left-footer-section">

                        <div className="left-content">
                            <LocationOnIcon fontSize='large' className="left-icon"/>
                            <b> 21 , Resolution Sheets Paris , France </b>
                        </div>

                        <div className="left-content">
                            <CallIcon fontSize='large' className="left-icon"/>
                            <b> + 1 555 123456</b>
                        </div> 

                        <div className="left-content">
                            <MailIcon fontSize='large' className="left-icon"/>
                            <b> support@minishop.com </b>
                        </div>

                    </div>

                    <div className="right-footer-section">
                        <h3>About Mini Shop</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod ex illo, laudantium facere incidunt placeat qui blanditiis. Voluptatum, quibusdam.</p>
                        
                    </div>
                </div>
                        <Link className="footer-logo" to='/home'>
                            <Logo />
                        </Link>
                        <div className="footer-social-media">
                                <Facebook fontSize='large' className='social-icons' size='mediam'/>
                                <Instagram fontSize='large' className='social-icons' size='mediam'/>
                                <GitHub fontSize='large' className='social-icons' size='mediam'/>
                                <Twitter fontSize='large' className='social-icons' size='mediam'/>
                        </div>
                
                    
            </footer>
        </>
    )
}

export default Footer;