import React from 'react';
import './slider.style.css';
import {connect} from 'react-redux';
import SliderItems from './Slider_item';
import { selectSliderSection } from '../../redux/slider/slider.selector';
import { createStructuredSelector } from 'reselect';


function Slider({slider_Collection}){
    return(
        <>
            <div className="container-fluid p-3 ">
                <div className="container">
                    <div id="mySlideShow" className="carousel carousel-dark slide " data-ride="carousel">
                    <ol className="carousel-indicators">
                            <li data-target="mySlideShow" data-bs-slide-to="0" className="active"></li>
                            <li data-target="mySlideShow" data-bs-slide-to="1"></li>
                            <li data-target="mySlideShow" data-bs-slide-to="2"></li>

                    </ol>
                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                {
                                    slider_Collection.map(({imageUrl , id }) =>(
                                        <SliderItems key={id} imageUrl={imageUrl} />
                                    ))
                                }
                                <img src="./public/Images/Koala.jpg"  width="100%" height="450px"/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                    </div>
                    <a href="#mySlideShow" className="carousel-control-prev" role="button" data-slide="prev">
                        <span className="fa fa-angle-left"  style={{color: "black;", fontSize: "50px;"}} aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                    </a>
                    <a href="#mySlideShow" className="carousel-control-next" role="button" data-slide="next">
                        <span className="fa fa-angle-right" style={{color: "black;", fontSize: "50px;"}} aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    slider_Collection: selectSliderSection
})

export default connect(mapStateToProps)(Slider);