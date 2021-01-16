import './App.css';
import Character from './components/Character/Character'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className="App">

      <div className="character">
        <Character name='Cloud' />
      </div>

      <div className="enemy">
        <Character name='Red' />
      </div>

      <Menu user={{ name: 'Cloud' }} />
    </div>
  );
}

export default App;
