import logo from './logo.svg';
import './styles/App.css';
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

        <Intro />

        <section id="experiences"> <MyAllExps /> </section>
        <section id="education"> <MyAllEducation /> </section>
        <section id="projects"> <MyAllPersonalProjects /></section>
        <section id='publications'> <Publication/> </section>

        <div style={{fontSize:'14px'}}>

        <a target="_blank" href="https://icons8.com/icon/98960/linkedin">LinkedIn </a> & <a target="_blank" href="https://icons8.com/icon/12599/github">GitHub </a>
        icônes par <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>

      <hr />

    </div>
  );
}

export default App;