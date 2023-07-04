
import './App.css';
import Avatar from './components/Avatar';
import Intro from './components/Intro';
import Skill from './components/Skill';
import { sk } from './data/SkillArray';


function App() {

  return (
    <div className="card">


      <Avatar />
      <div className="data">
        <Intro />
        <div className="skillList">
          {sk.map(skl => <Skill skill={skl.skill} color={skl.color} emoji={skl.level} />)}
        </div>


      </div>


    </div>
  );
}

export default App;
