import Header from "./Components/Header";
import Home from "./Components/Home"
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Work from "./Components/Work";
import data from "./data/data.json"
import styles from './styles/Global.module.scss'

function App() {
  
  return (
    <>
  
      <Header menu={data.menu}/>
      
      <div className={styles.bodyContainer}>
        <div className="home-anchor" id="home-anchor" />
        <div id="home" className={styles.homeFull}>
          <Home wordsList={data.interests}/>
        </div>
        <div className="work-anchor" id="work-anchor" />
        <div id="work" className={styles.workEmpty}>
          <Work cvItems={data.cvEntries}/>
        </div>
        <div className="projects-anchor" id="projects-anchor" />
        <div id="projects" className={styles.projectsFull}>
          <Carousel projList={data.projects} />
        </div> 
        <div className="about-anchor" id="about-anchor" />
        <div id="about" className={styles.aboutEmpty}>
          <About />
        </div> 
        </div>


    </>
  );
}

export default App;
