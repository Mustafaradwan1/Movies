import Navbar from "./components/pages/Navbar";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Tv from "./components/pages/Tv";
import Movies from "./components/pages/Movies";
import Home from "./components/pages/Home";
import SingleMovie from "./components/SingleMovie/SingleMovie";
import SingleTv from "./components/SingleTv/SingleTv";


const App = () => {
  return <>
  <div className="app">
  

    <div className="relative">
    <HashRouter>
      <div className="w-full">
        <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Navbar" element={<Navbar />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="Movies/:id" element={<SingleMovie />} />
          <Route path="Tv/:id" element={<SingleTv />} />
          <Route path="Tv" element={<Tv />} />
      </Routes>
    </HashRouter>
    </div>
  </div>
  </>
};

export default App;