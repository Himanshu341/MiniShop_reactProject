import React from 'react';
import './previewCollection.style.css';

import {Link} from 'react-router-dom';

import CollectionItem from '../collection-item/Collection-item';
// import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { HiArrowCircleRight } from 'react-icons/hi';

const CollectionPreview = ({title , items}) => {
    return(
        <>
                <div className="collection-priview container">
                    <Container maxWidth='xl'  style={{ backgroundColor: 'white', marginBottom:'2rem' , paddingBottom:'1rem' , boxShadow:'20px 20px 10px grey'  }}>

                        <div className="header">
                            <h1 className="title">{title.toUpperCase()}</h1>
                            <h1><Link to='/scard'>
                                    <HiArrowCircleRight className="seeMore" style={{marginTop:'3.8rem', cursor:'pointer'}} Size='larger' color='primary'/>
                            </Link></h1>
                        </div>
                        <hr />

                        <div className="preview">

                            {
                                items
                                .filter((items , idx) => idx < 3)
                                .map((item) => (
                                    <CollectionItem key={item.id} item={item} />
                                ))
                            }
                        </div>

                    </Container>


                </div>
        </>
    );
}

export default CollectionPreview;