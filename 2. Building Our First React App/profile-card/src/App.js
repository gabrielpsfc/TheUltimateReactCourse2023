
import './App.css';
import Avatar from './components/Avatar';
import Intro from './components/Intro';
import Skill from './components/Skill';



function App() {

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <div className="skillList">
          <Intro />
          <Skill skill='coder' color='blue' emoji='💪' />
          <Skill skill='gardener' color='green' emoji='💪' />
          <Skill skill='cs:go player' color='grey' emoji='💪' />
          <Skill skill='driver' color='red' emoji='💪' />
          <Skill skill='dog owner' color='yellow' emoji='💪' />
        </div>


      </div>


    </div>
  );
}

export default App;
