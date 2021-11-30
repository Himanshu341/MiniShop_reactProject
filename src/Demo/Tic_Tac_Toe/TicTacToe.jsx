import React,{useState} from 'react';
import './Tic_Tac_Toe.style.css';
import SquareComponent from './square';
import { useEffect } from 'react';

const initialState = ["","","","","","","","",""];

const TicTacToeApp = () => {

    // const[currentsign , setNewSign] = useState('');

    const [gameState , updateGameState] = useState(initialState);
    const [isXChance , updateIsXChance] = useState(true);

   const handleClick = (index) => {
        let strings = Array.from(gameState);
        strings[index] = isXChance ? "X" : "0" ;
        updateGameState(strings);
        updateIsXChance(!isXChance);
   }
   useEffect(() => {
       const winner = checkWinner();
       if(winner){
           alert(` Ta da ! ${winner} has won the Game !`);
           updateGameState(initialState)
       }
   },[gameState])
   const checkWinner = () => {
       const lines = [
           [0,1,2],
           [3,4,5],
           [6,7,8],
           [0,3,6],
           [1,4,7],
           [2,5,8],
           [0,4,8],
           [2,4,6],
       ];
       for(let i=0; i < lines.length ; i++){
           const [a,b,c] = lines[i];
           if(gameState[a] && gameState[a] === gameState[b] && gameState[a] ===gameState[c]){
               return gameState[a];
           }
       }
   }

    return(
        <>  
            <section className="TicTacToe-main container">
                <h1 className='title text-light ' style={{fontSize:'40px'}}>Tic Tac Toe Game</h1>

                {/* Designing Game */}

                <div className="main-design-game">
                    <div className="input-section"  >
                        <SquareComponent className='b-bottom-right'  state={gameState[0]} onClick={() => handleClick(0)}/>
                        <SquareComponent  state={gameState[1]} onClick={() => handleClick(1)}/>
                        <SquareComponent  state={gameState[2]} onClick={() => handleClick(2)}/>
                    </div>
                    <div className="input-section"  >
                        <SquareComponent state={gameState[3]} onClick={() => handleClick(3)}/>
                        <SquareComponent state={gameState[4]} onClick={() => handleClick(4)}/>
                        <SquareComponent state={gameState[5]} onClick={() => handleClick(5)}/>
                    </div>
                    <div className="input-section"  >
                        <SquareComponent state={gameState[6]} onClick={() => handleClick(6)}/>
                        <SquareComponent state={gameState[7]} onClick={() => handleClick(7)}/>
                        <SquareComponent state={gameState[8]} onClick={() => handleClick(8)}/>
                    </div>
                    <button className="btn btn-primary reset" onClick={() => updateGameState(initialState)}>
                        Reset Game
                    </button>
                </div>
            </section>
        </>
    )
}

export default TicTacToeApp;