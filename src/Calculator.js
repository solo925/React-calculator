import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        const number = setInput(value)
        result = input + number;
        const result  = setResult(result)
        
        
    }

    const handleClear = () => {
        setInput('')
        setResult('')
    }

  return (
      <div className='calculator'>
          <div className='display'>
              <div className='input'></div>
              <div className='result'></div>
          </div>
          <div className='buttons'>
              <button onClick={()=>handleClick('1')}>1</button>
              <button onClick={()=>handleClick('2')}>2</button>
              <button onClick={()=>handleClick('3')}>3</button>
              <button onClick={() => handleClick('+')}>+</button>
              <button onClick={()=>handleClick('4')}>4</button>
              <button onClick={()=>handleClick('5')}>5</button>
              <button onClick={() => handleClick('6')}>6</button>
              <button onClick={() => handleClick('-')}>-</button>
              <button onClick={()=>handleClick('7')}>7</button>
              <button onClick={()=>handleClick('8')}>8</button>
              <button onClick={()=>handleClick('9')}>9</button>
              <button onClick={()=>handleClick('*')}>*</button>
              <button onClick={()=>handleClick('0')}>0</button>
              <button onClick={()=>handleClick('.')}>.</button>
              <button onClick={()=>handleClick()}>=</button>
              <button onClick={()=>handleClick('/')}>/</button>
              <button onClick={handleClear}>c</button>
        </div>
     </div>
      
  )
}

export default Calculator