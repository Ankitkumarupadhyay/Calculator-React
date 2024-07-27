import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {
   const[inputValue,setInputValue]= useState("");

   const display=(value)=>{
    setInputValue(inputValue + value)
   }
   const calculate=()=>{
    let answers=eval(inputValue);
    setInputValue(answers)
   }
   const clear =()=>{
    setInputValue("");
   }
  return<>
  <form name='calc' className='calculator'>
    <input type="text" placeholder='000' value={inputValue} className='value'/>
    <span className="num clear" onClick={()=>clear()}>Clear</span>
    <span className="num" onClick={()=> display('/')}>/</span>
    <span className="num" onClick={()=> display('*')}>*</span>
    <span className="num" onClick={()=> display(7)}>7</span>
    <span className="num" onClick={()=> display('8')}>8</span>
    <span className="num" onClick={()=> display('9')}>9</span>
    <span className="num" onClick={()=> display('-')}>-</span>
    <span className="num" onClick={()=> display('4')}>4</span>
    <span className="num" onClick={()=> display('5')}>5</span>
    <span className="num" onClick={()=> display('6')}>6</span>
    <span className="num plus" onClick={()=> display('+')}>+</span>
    <span className="num " onClick={()=> display('1')}>1</span>
    <span className="num" onClick={()=> display('2')}>2</span>
    <span className="num" onClick={()=> display('3')}>3</span>
    <span className="num" onClick={()=> display('0')}>0</span>
    <span className="num" onClick={()=> display('00')}>00</span>
    <span className="num" onClick={()=> display('.')}>.</span>
    <span className="num equal" onClick={()=>calculate()}>=</span>
  </form>
  </>
}

export default Calculator
