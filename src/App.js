import "./App.css";
import Slider from "./components/Slider/Slider";
import {Routes, Route} from "react-router-dom";
import Accordion from "./components/Accordion/Accordion";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import Everything from "./components/Everything/Everything";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Allinone from "./components/Allinone/Allinone";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/list" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/table" element={<Table />} />
        <Route path="/form" element={<Form />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="/allinone" element={<Allinone />} />
      </Routes>
    </>
  );
}

export default App;
