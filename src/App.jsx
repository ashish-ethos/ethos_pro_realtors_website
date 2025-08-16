import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Project from "./pages/Projects/Project";

import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

// Layout
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Residentials from "./pages/Projects/Residentials";
import Commercial from "./pages/Projects/Commercial";
import PremiumProperties from "./components/PremiumProperties/PremiumProperties";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/location" element={<Home />} />

          {/* Projects */}
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/residential" element={<Residentials />} />
          <Route path="/projects/commercial" element={<Commercial />} />
          <Route path="/premiumproperties/:propertyName" element={<PremiumProperties />} />

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
