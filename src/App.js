import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Cover from "./Pages/Cover/Cover";
import Haldi from "./Pages/Cover/Haldi";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* services */}
        <Route path="/services" element={<Services />} />
        {/* program we cover */}
        <Route path="/program-we-cover" element={<Cover />} />
        <Route path="/program-we-cover/haldi-night" element={<Haldi />} />
        {/*  */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
