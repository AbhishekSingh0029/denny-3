
import './App.css';
import Header from './Component/Header';
import Fotter from './Component/Fotter';
import Comments from './Component/Comments';
import Images2 from './Component/Images2';
import HowtoSearchdeny from './Component/HowtoSearchdeny';
import JobSearch from './Component/JobSearch';
import JobEveryone from './Component/JobEveryone';
import JobType from './Component/JobType';
import Region from './Component/Region';
import Section from './Component/Section';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section></Section>
      <HowtoSearchdeny></HowtoSearchdeny>
      <div>
        <h1>
          Trusted Register Agent
        </h1>
        
      </div>
      <JobEveryone></JobEveryone>
      <JobType/>
      <JobSearch></JobSearch>
      <Region></Region>
       <h1>50+ Job categories</h1><br/>
       <h3><i>With over 50+ job categories, find the right job with better salary</i></h3>
      <Images2></Images2>
      <Images2></Images2>
      <Comments></Comments>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
