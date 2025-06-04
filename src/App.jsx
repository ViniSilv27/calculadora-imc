import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CalculadoraIMC from './components/Calculadora'
import Tabela from './components/Tabela'


function App() {

  return (
    <div >
      <CalculadoraIMC />
      <Tabela/>
    </div>
  )
}

export default App
