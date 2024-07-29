import { useState } from 'react'

import './App.css'

function App() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resultado, setResultado] = useState("resultado");

  function soma() {
    let soma = Number(num1) + Number(num2);
    setResultado(soma)
  }


  
  return (
    <>
    <h1>Calculadora</h1>
        <h3>Números a Calcular</h3>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Número"/> &nbsp; : &nbsp;
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Número"/><br/>
        <button onClick={soma}>Soma</button>
        
        <h3 id='resultado'> {resultado} </h3>
    </>
  )
}

export default App