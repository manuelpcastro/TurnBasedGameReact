import './App.css';
import Character from './components/Character/Character'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Character name='Red' />

      </div>
      <div className="App-header">
        <Character name='Cloud' />
      </div>
    </div>
  );
}

export default App;
