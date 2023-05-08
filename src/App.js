import './App.css';
import Slider from './components/Slider/Slider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from './components/Accordion/Accordion';
import Home from './components/Home/Home';
import Form from './components/Form/Form';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
