// custom components
import Popup from "./components/Popup"
import { useState } from 'react'

function App() {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className="App">
      <main>
        <h1 className="title">React Popup</h1>
        <button onClick={() => setButtonPopup(true)} className="open-btn">Open Popup</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Popup</h3>
        <p>This is my button triggered popup</p>
      </Popup>
    </div>
  )
}

export default App
