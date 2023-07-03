import './App.css';
import { useState } from 'react';
import DrumPads from './DrumPads/DrumPads';
function App() {
  const [playing, setPlaying] = useState("")
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <p>{playing}</p>
          <DrumPads setPlaying={setPlaying}/>
        </div>

      </div>
    </div>
  );
}

export default App;
