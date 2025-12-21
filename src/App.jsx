import { useState } from 'react'
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
          <input 
            type="text" 
            value={rgb} 
            onChange={(e)=> setRgb(e.target.value)}
          />
          <button onClick={newRgb} className="color-code">
            Generate
          </button>
        </div>
      </div>
    </>
  )
}

export default App
