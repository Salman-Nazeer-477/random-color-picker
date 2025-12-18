import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [rgb, setRgb] = useState("#000000")
  function newRgb(){
    let R = Math.floor(Math.random() * 100)
    let G = Math.floor(Math.random() * 100)
    let B = Math.floor(Math.random() * 100)
    let RGB = "#" + R + G + B
    setRgb(RGB)
  }
  return (
    <>
      <div className="main" style={{backgroundColor: rgb}}>
        <div className="box">
          <div onClick={newRgb} className="color-code">
            {rgb}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
