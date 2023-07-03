import './App.css';
import DrumPads from './DrumPads/DrumPads';
function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <DrumPads/>
        </div>

      </div>
    </div>
  );
}

export default App;
