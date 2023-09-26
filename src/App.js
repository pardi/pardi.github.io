import Header from "./Components/Header";
import Home from "./Components/Home"
import Projects from "./Components/Projects";
import About from "./Components/About";
import Work from "./Components/Work";
import data from "./data/data.json"
import Section from "./Components/Section";
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
        <div className="about-anchor" id="about-anchor" />
        <div id="about" className={styles.aboutEmpty}>
          <About />
        </div> 
      </div>

    {/* 
    <div className="body-container">
      <Home type="odd"/>
      <Work cvItems={data.cvEntries}/>
      <Projects type="odd" projList={data.projects}/>
      <About type="even" />
      <Section  on name="about" type="full" body={<About />}/>
    </div>  */}
    </>
  );
}

export default App;
