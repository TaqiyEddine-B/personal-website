import logo from './logo.svg';
import './App.css';
import MyAllExps from './sections/allexps';
import MyAllEducation from './sections/alleducation';
import MyAllPersonalProjects from './sections/allpersonalprojects';
import Publication from './sections/allpublications';
import Intro from './components/intro';
import ButtonContainer from './components/header_new';
function App() {
  return (
    <div className="App">

      <ButtonContainer />

      <header className="App-header">
        <Intro />

        <section id="experiences"> <MyAllExps /> </section>
        <section id="education"> <MyAllEducation /> </section>
        <section id="projects"> <MyAllPersonalProjects /></section>
        <section id='publications'> <Publication/> </section>

        </header>

      <hr />
    </div>
  );
}

export default App;
