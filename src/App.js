import './App.css';
import Character from './components/Character/Character'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Character name='Red' />

      </div>
      <div className="App-header">
        <Character name='Cloud' />
      </div>
      <div className="App-header">
        <Menu user={ {name: 'Cloud'} }/>
      </div>
    </div>
  );
}

export default App;
