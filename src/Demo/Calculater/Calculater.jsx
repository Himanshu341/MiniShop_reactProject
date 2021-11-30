import React , {useState} from 'react';
import './calculater.css';

const Calculater = () => {

    const [result , setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = (e) => {
        setResult('');
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }

    const Calculate = () => {
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult('Error')
        }
    }


    return(
        <>
            
            <div className="calculater">
                <form action="" className='display'>
                    <input type="text" className='input-display' value={result} />
                </form>

                <div className="keypad">
                    <button onClick={clear} className='clear highlight'>Clear</button>
                    <button onClick={backspace} className='btn btn-danger'>C</button>
                    <button name='/' onClick={handleClick} className='highlight'>/</button>
                    <button name='7' onClick={handleClick}>7</button>
                    <button name='8' onClick={handleClick}>8</button>
                    <button name='9' onClick={handleClick}>9</button>
                    <button name='x' onClick={handleClick} className='highlight'>&times;</button>
                    <button name='4' onClick={handleClick}>4</button>
                    <button name='5' onClick={handleClick}>5</button>
                    <button name='6' onClick={handleClick}>6</button>
                    <button name='-' onClick={handleClick} className='highlight'>-</button>
                    <button name='1' onClick={handleClick}>1</button>
                    <button name='2' onClick={handleClick}>2</button>
                    <button name='3' onClick={handleClick}>3</button>
                    <button name='+' onClick={handleClick} className='highlight'>+</button>
                    <button name='0' onClick={handleClick}>0</button>
                    <button name='.' onClick={handleClick}>.</button>
                    <button  onClick={Calculate} className='result highlight'>=</button>

                </div>
            </div>
                   
        </>
    )
}

export default Calculater;