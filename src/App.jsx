import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="max-w-[850px] mx-auto px-6 py-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* คุณสามารถเพิ่ม Path อื่นๆ เช่น /projects, /publications ได้ที่นี่ */}
      </Routes>
    </div>
  )
}

export default App