import logo from './logo.svg';
import './App.css';
import MyAllExps from './components/allexps';

class MyExperience {
  constructor(title, missions, skills) {
    this.title = title;
    this.missions = missions;
    this.skills = skills;
  }
}
function App() {
  const missions = ["Do sth", "Do sth else", "Do nothing :)"];
  const experience = new MyExperience("Experience", missions, ["Skill","Skill2"]);

  return (
    <div className="App">
      <p> Welcome to my portfolio!</p>
      <header className="App-header">
        <p>
         Taqiy Eddine BOUKLOUHA
        </p>
        <p> AI Developer </p>

        <MyAllExps />

      </header>
    </div>
  );
}

export default App;
