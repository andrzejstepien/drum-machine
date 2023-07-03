import './App.css';
import { useState } from 'react';
import DrumPads from './DrumPads/DrumPads';
function App() {
  const [playing, setPlaying] = useState("")
  return (
    <div className="App">
      <div id="drum-machine">
        <h1>DrumMachine...</h1>
        <div id="display">
          <p>{playing===""?"waiting for user input":playing}</p>
          </div>
          <DrumPads setPlaying={setPlaying}/>
        

      </div>
    </div>
  );
}

export default App;
