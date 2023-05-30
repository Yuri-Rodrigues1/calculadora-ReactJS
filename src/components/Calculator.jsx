import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {

    const [num,setNum] = useState(0);
    const [oldNum,setOldNum] = useState(0);
    const [operator,setOperator] = useState();

    const inputNum = (e)=>{
        var input = e.target.value;
        if(num === 0){
            setNum(input);
        }else{
            setNum(num + input)
        }
    }
    const clear = () =>{
        setNum(0);
    }
    const porcentage = ()=>{
        setNum(num/100);
    }
    const changeSign = () =>{
        if(num > 0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }
    const calculate = () =>{
        if(operator === "+"){
            setNum(parseFloat(oldNum) + parseFloat(num));
        }else if(operator === "-"){
            setNum(parseFloat(oldNum) - parseFloat(num));
        }else if(operator === "X"){
            setNum(parseFloat(oldNum) * parseFloat(num));
        }else if(operator === "/"){
            setNum(parseFloat(oldNum) / parseFloat(num));
        }
     //parseFloat foi para indicar que é um número e não uma string   
        
    }    
    const operatorHandler = (e) =>{
        var operadorInput = e.target.value;
        setOperator(operadorInput);
        setOldNum(num);
        setNum(0);

    }

  return (
    <div>
        <Box m={2}/>
        <Container maxWidth="xs">
            <div className='wrapper'>
                <h1 className='result'>{num}</h1>
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={porcentage}>%</button>
                <button className='orange' onClick={operatorHandler} value={"/"}>/</button>
                <button className='gray' onClick={inputNum} value={7}>7</button>
                <button className='gray' onClick={inputNum} value={8}>8</button>
                <button className='gray' onClick={inputNum} value={9}>9</button>
                <button className='orange' onClick={operatorHandler} value={"X"}>X</button>
                <button className='gray' onClick={inputNum} value={4}>4</button>
                <button className='gray' onClick={inputNum} value={5}>5</button>
                <button className='gray' onClick={inputNum} value={6}>6</button>
                <button className='orange' onClick={operatorHandler} value={"-"}>-</button>
                <button className='gray' onClick={inputNum} value={1}>1</button>
                <button className='gray' onClick={inputNum} value={2}>2</button>
                <button className='gray' onClick={inputNum} value={3}>3</button>
                <button className='orange' onClick={operatorHandler} value={"+"}>+</button>
                <button className='gray' style={{width:"7em"}} onClick={inputNum} value={0}>0</button>
                <button className='gray' onClick={inputNum} value={"."}>,</button>
                <button className='orange' onClick={calculate}>=</button>  
            </div>
        </Container>
    </div>
  )
}
