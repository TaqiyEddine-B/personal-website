import logo from './logo.svg';
import './App.css';
import MyAllExps from './components/allexps';
import MyAllEducation from './components/alleducation';
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
        <MyAllEducation/>
      </header>
    </div>
  );
}

export default App;
