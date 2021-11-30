import React from 'react';
import './demoApp.css';
import {Route, Switch , Redirect} from 'react-router-dom';

import TodoListApp from './ToDo_List/TodoList';
import DemoForm from './Form/Demo_Form';
import RegistrationForm from './Form/Registration_Form';
import Chats from './chats/Chats';
import Navigation from './Navbar/Navigation';
import Calculater from './Calculater/Calculater';
import SocialCards from './Social-card/Social-card';
import TicTacToeApp from './Tic_Tac_Toe/TicTacToe'

const DemoApp = () => {
    return(
        <>
            <div> 
                <Navigation/>
                <div>
                    <Switch>
                        <Route exact path='/about' component={Chats} />
                        <Route exact path='/todolist' component={TodoListApp} />
                        <Route exact path='/register' component={RegistrationForm} />
                        <Route exact path='/login' component={DemoForm} />
                        <Route exact path='/calc' component={Calculater} />
                        <Route exact path='/scard' component={SocialCards} />
                        <Route exact path='/tictactoe' component={TicTacToeApp} />


                    </Switch>





                    {/* <TodoListApp/> */}
                    {/* <DemoForm/>
                    <RegistrationForm/> */}
                    {/* <Chats/>  */}
                    {/* <GithubUser/> */}
                </div>
                
            </div>
        </>
    )
}

export default DemoApp;