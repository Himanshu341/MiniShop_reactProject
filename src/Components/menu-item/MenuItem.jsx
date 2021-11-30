import React from 'react';
import './menuitem.style.css';



const MenuItem = ({title , imageUrl}) => {
    return(
        <>

                    <div style={{
                        backgroundImage: `url(${imageUrl})`
                    }} className="menu-item">
                        <div className="content">
                            <h2 className="menu-title">{title.toUpperCase()}</h2>
                            {/* <span className="subtitle">SHOP NOW</span> */}
                        </div>
                    </div> 

        </>
    );
}

export default MenuItem;


