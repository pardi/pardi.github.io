import Header from "./Components/Header";
import Home from "./Components/Home"
import Projects from "./Components/Projects";
import About from "./Components/About";
import Work from "./Components/Work";
import Robot from "./Components/Robot";
import data from "./data/data.json"

function App() {
  
  return (
    <>
    <Header />
    <div className="body-container">
      <Home type="odd"/>
      <Work cvItems={data.cvEntries}/>
      <Projects type="odd" projList={data.projects}/>
      <About type="even" />
    </div> 
    </>
  );
}

export default App;
