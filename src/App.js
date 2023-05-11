import './App.css';
import Slider from './components/Slider/Slider';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Accordion from './components/Accordion/Accordion';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Everything from './components/Everything/Everything';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/list" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/table" element={<Table />} /> 
        <Route path="/form" element={<Form />} />
        <Route path="/everything" element={<Everything />} />
      </Routes>
    </>
    

  );
}

export default App;
