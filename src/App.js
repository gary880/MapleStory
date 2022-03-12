import ReactDOM from "react-dom";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";





const App = () =>{
  
  return (
    <BrowserRouter basename="/MapleStory">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
