import React from 'react';
import './chat-card.style.css';
import Paper from '@material-ui/core/Paper';
import Chat_data from '../../Chat_data';
import ChatCardContent from '../chat-card-content/ChatcardContent';




const ChatCard = (props) => {
    return(
        <>
            <div className="container">
                <Paper>
                    <div className="main-chat-card ">
                        {
                            Chat_data.map(ChatCardContent)
                        }
                    </div>
                </Paper>
            </div>
        </>
    )
}   

export default ChatCard;