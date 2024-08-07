import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [equalsClicked, setEqualsClicked] = useState(false);


    const handleClick = (value) => {
        if (equalsClicked) { // If equals was clicked, reset the input before adding new input
          setInput(value);
          setResult('');
          setEqualsClicked(false); // Reset the equals clicked state
        } else {
          setInput(input + value); // Append the clicked button value to the input state
        }
      };




   // Function to clear the input and result
   const handleClear = () => {
    if (equalsClicked) {
      setInput(''); // Reset input to an empty string
      setResult(''); // Reset result to an empty string
    } else {
      setInput(input.slice(0, -1)); // Remove the last character from input
    }
  };

  // Function to evaluate the expression and calculate the result
  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(input); // Evaluate the input string (Note: eval can be dangerous if used improperly)
        setResult(evaluatedResult); // Set the result state to the evaluated result
        setEqualsClicked(true)
    } catch (error) {
      setResult('Error'); // If there's an error during evaluation, set the result to 'Error'
    }
  };

  return (
      <div className='calculator'>
          <div className='display'>
              <div className='input'>{ input}</div>
              <div className='result'>{ result }</div>
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
              <button onClick={()=>handleCalculate()}>=</button>
              <button onClick={()=>handleClick('/')}>/</button>
              <button onClick={handleClear}>c</button>
        </div>
     </div>
      
  )
}

export default Calculator