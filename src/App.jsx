import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Methodology from './pages/Methodology';
import Resources from './pages/Resources';



export default function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}