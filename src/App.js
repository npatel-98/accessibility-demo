import './App.css';
import Slider from './components/Slider/Slider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from './components/Accordion/Accordion';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Dashboard from './components/Dashboard/Dashboard';
import Everything from './components/Everything/Everything';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <div></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/list" element={<Home />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/table" element={<Table />} /> 
          <Route path="/form" element={<Form />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/everything" element={<Everything />} />
        </Routes>
      </BrowserRouter>
    </>
    

  );
}

export default App;
