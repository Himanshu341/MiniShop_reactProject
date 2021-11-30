import React , {useState} from 'react';
import './banner.style.css';
import Banner_data from './banner_data';
import Button from '@material-ui/core/Button'

const BannerCollection = ({imageUrl}) => {

    const [title , setTitle] = useState('');
    

    const changeTitle = () => {
        // alert('Successfull');
        setTitle(
            <>
                <img className='banner-img img1'  src={imageUrl} alt="" width='20px' />   
                <br/><br/><br/>
                <img className='banner-img img2'  src={imageUrl} alt="" width='20px' />   
            </>
        )
    }

    return(
        <>
            <div className="banner-content">
                <img className='banner-img'  src={imageUrl} alt="" width='100%'  />   
                    <div className='banner-about'>
                        <div className="left-b">
                            <h1><span>H</span>ello <span>E</span>veryone</h1>
                            <p>Welcome to Our WebSite</p>
                            <Button variant='contained'  color='secondary' onClick={changeTitle} >Click</Button>
                        </div>
                        <div className="right-b">
                            {title}
                        </div>
                    </div>
                </div>
        </>
    )
}


const Banner = () => {



    return(
        <>
            <div className="banner">
                {
                    Banner_data.map(BannerCollection)
                }
                
            </div>

                       
        </>
    );
}

export default Banner;