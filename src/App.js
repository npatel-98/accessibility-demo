import './App.css';
import Slider from './components/Slider/Slider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>

   </BrowserRouter>
  );
}

export default App;
