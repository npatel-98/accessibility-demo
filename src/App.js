import './App.css';
import Slider from './components/Slider/Slider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Accordion from './components/Accordion/Accordion';
import Home from './components/Home/Home';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
