import Header from "./Components/Header";
import Home from "./Components/Home"
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Work from "./Components/Work";
import data from "./data/data.json"
import styles from './styles/Global.module.scss'
// import CardS from './Components/testCard'

function App() {
  
  return (
    <>
  
      <Header menu={data.menu}/>
      <div className={styles.bodyContainer}>
        <div className={styles.sectionAnchor} id="home-anchor" />
        <div id="home" className={styles.homeFull}>
          <Home wordsList={data.interests}/>
        </div>
        <div className={styles.sectionAnchor} id="work-anchor" />
        <h1 className={styles.menuTitle}>WORK</h1>
        <div id="work" className={styles.workEmpty}>
          <Work cvItems={data.cvEntries}/>
        </div>
        <div className={styles.sectionAnchor} id="projects-anchor" />
        <h1 className={styles.menuTitleFull}>PROJECTS</h1>
        <div id="projects" className={styles.projectsFull}>
          <Carousel projList={data.projects} />
        </div> 
        <div className={styles.sectionAnchor} id="about-anchor" />
        <div id="about" className={styles.aboutEmpty}>
          <About />
        </div> 
        {/* <div className={styles.sectionAnchor} id="crs-anchor" /> */}
        {/* <div id="crs" className={styles.crs}>
          asdfasd
          <CardS img="fabrik400.png"/>
        </div>  */}
        </div>


    </>
  );
}

export default App;
