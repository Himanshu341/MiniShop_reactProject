import React , { useEffect , useState } from 'react';
import './chats.css'
import ChatCard from './chat-component/chats-section/chat-card.component';

import  Button  from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {AiFillCamera} from 'react-icons/ai';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
// import TodoListApp from '../ToDo_List/TodoList';

const Chats = () => {

    const [count , setCount] =  useState(0);

    useEffect(() => {
        if(count >= 1){
            document.title = `Chats(${count})`;  
        }else{
            document.title = `Chats`;

        }
    }, [count])

    const [widthcount , setwidthcount] = useState(window.screen.width)

    const actualwidth = () => {
        setwidthcount(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize' , actualwidth);

        return () => {
            window.removeEventListener('resize' , actualwidth);
        }
    },[widthcount]);

    return(
        <>
            <Paper elevation={10}>
                <div className="chat-section">
                    <div className="chat-header-section">
                        <div className="top-header">
                            <div className="chat-title">
                                <h3 className=' text-light pl-2'>WhatsApp</h3>
                            </div>
                            <div className="chat-icons">
                                <li><SearchIcon /></li>
                                <li><MoreVertIcon /></li>
                            </div>
                        </div>
                        
                        <div className="bottom-Menu-section">
                            <div className="menu-section">
                                <a><AiFillCamera fontSize={20}/></a>
                                <li className='active'>Chats</li>
                                <li>Status</li>
                                <li>Calls</li>
                            </div>
                        </div>
                    </div>
                    <div className="chat-main-body">
                        <div className="chat-body-section">
                            <ChatCard/>
                        </div>
                    </div>

                    <br />

                    <Button variant='contained' onClick={()=> setCount(count + 1)}>Click Here</Button>
                </div>
                {/* <div className="screen-size">
                    <p>The Actual Size of width :</p>
                    <p>{widthcount}</p>
                </div> */}
            </Paper>
            
        </>
    )
}

export default Chats;