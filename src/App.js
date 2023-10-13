import { Fabrik } from "./pages/Fabrik";
import { NoPage } from "./pages/NoPage";
import { Layout } from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
	<>
		<BrowserRouter>
			<Routes>
			  	<Route path="/" element={<Layout />} />
				<Route path="fabrik" element={<Fabrik />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	</>
  );
}

export default App;

{/* <Header menu={data.menu}/>
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
		</div>
 */}