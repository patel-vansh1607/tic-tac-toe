import './App.css';
import Board from './components/board';

function App() {
  return (
    <div className="App" style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;
