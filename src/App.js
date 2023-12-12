import logo from './logo.svg';
import './App.css';
import Experience from './components/experience';


class MyExperience {
  constructor(title, missions, skills) {
    this.title = title;
    this.missions = missions;
    this.skills = skills;
  }
}
function App() {
  const missions = ["Do sth", "Do sth else", "Do nothing"];
  const experience = new MyExperience("Experience", missions, ["Skill","Skill2"]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Taqiy Eddine BOUKLOUHA
        </p>
        <p> AI Developer </p>

        <Experience experience={experience} />

      </header>
    </div>
  );
}

export default App;
