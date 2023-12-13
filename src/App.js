import logo from './logo.svg';
import './App.css';
import MyAllExps from './components/allexps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p> Welcome to my portfolio!</p>

        <p>
         Taqiy Eddine BOUKLOUHA
        </p>
        <p> AI Developer @SolutionData Group | Toulouse, France</p>
        <MyAllExps />
      </header>
    </div>
  );
}

export default App;
