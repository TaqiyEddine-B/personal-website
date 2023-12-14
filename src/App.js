import logo from './logo.svg';
import './App.css';
import MyAllExps from './sections/allexps';
import MyAllEducation from './sections/alleducation';
import MyAllPersonalProjects from './sections/allpersonalprojects';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
      <p> Welcome to my portfolio!</p>
        <p>
         Taqiy Eddine BOUKLOUHA
        </p>
        <p> AI Developer @SolutionData Group | Toulouse, France</p>
        <section id="experiences"> <MyAllExps /> </section>
        <section id="education"> <MyAllEducation /> </section>
        <section id="projects"> <MyAllPersonalProjects /> </section>

      </header>
    </div>
  );
}

export default App;
