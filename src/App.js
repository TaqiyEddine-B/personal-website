import logo from './logo.svg';
import './App.css';
import MyAllExps from './sections/allexps';
import MyAllEducation from './sections/alleducation';
import MyAllPersonalProjects from './sections/allpersonalprojects';
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
        <MyAllPersonalProjects/>
      </header>
    </div>
  );
}

export default App;
