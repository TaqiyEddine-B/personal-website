import logo from './logo.svg';
import './App.css';
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          My website is under construction.
        </p>
        <Experience
            title="Software Developer"
            responsibilities={['Developing new features', 'Bug fixing', 'Code review']}
            skills={['JavaScript', 'React', 'Node.js']}
        />
      </header>
    </div>
  );
}

export default App;
