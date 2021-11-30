import React from 'react';
import Directory from '../../Components/directory/Directory';
import Footer from '../../Components/footer/Footer';
// import Slider from '../../Components/slider/Slider';
import Banner from '../../Components/Banner/Banner';




const Homepage = () => {
    return(
        <>
            <div className="homepage">
                {/* <Banner/> */}
                <Directory />
                {/* <Slider/> */}
            </div>
            <Footer/>

        </>
    );
}

export default Homepage;