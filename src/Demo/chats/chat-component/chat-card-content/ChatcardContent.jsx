import React from 'react';
import Paper from '@material-ui/core/Paper';



const ChatCardContent = ({imageUrl , phone ,name}) => {
    return(
        <>
            {/* <Paper elevation={10}> */}
                <div className="chat-card-content">
                        <img className='profile-pic rounded-circle' src={imageUrl} alt=""  />
                        <div className="chat-msg">
                            <h5>{name}</h5>
                            <h5>{phone}</h5>
                        </div>
                </div>
                <hr />
                
            {/* </Paper> */}
            

        </>
    )
}

export default ChatCardContent ;