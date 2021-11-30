import React from 'react';
import './social-card.css';
import { useSelector , useDispatch } from 'react-redux';
import {HiArrowCircleRight} from 'react-icons/hi'
import Card from '@material-ui/core/Card';


const SocialCards = () =>{

    const Scard_data = useSelector((state) => state.socialCard.Scard_collection)

    return(
        <>
            
            <div className="container ">
                <div className="social-cards">
                        {
                            Scard_data.map((elem)=>{
                                return(
                                    <>
                                        <Card elevation={10} className="social-card-content" key={elem.id}>

                                            <section className="card-header">
                                            <h4>{elem.title}</h4>
                                            </section>
                                            <section className="social-card-img">
                                                <img src="./Images/Hydrangeas.jpg" alt="" width='100px' />
                                            </section>
                                            <section className="social-card-details">
                                                <h4>{elem.routeName}</h4>
                                                <h4></h4>
                                            </section>
                                        </Card>                                    
                                    </>
                                )
                            })
                        }
                </div>
            </div>
        </>
    )
}

export default SocialCards;