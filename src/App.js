import { FabrikPage } from "./pages/FabrikPage";
import { YadqPage } from "./pages/YadqPage";
import { NoPage } from "./pages/NoPage";
import { Layout } from "./Components/Layout";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data/data.json"

function App() {
  
	// TODO: change links to something more mantainable
  return (
	<>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage menu={data.menu.home} />} />
					<Route path="/fabrikProj" element={<FabrikPage menu={data.menu.project} link={data.projects[2].link}/>} />
					<Route path="/yadqProj" element={<YadqPage menu={data.menu.project} link={data.projects[1].link}/>} />
					<Route path="*" element={<NoPage menu={data.menu.nopage} />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</>
  );
}

export default App;