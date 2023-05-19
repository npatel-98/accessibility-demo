import "./App.css";
import Slider from "./components/Slider/Slider";
import {Routes, Route, useLocation} from "react-router-dom";
import Accordion from "./components/Accordion/Accordion";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import Hero from "./components/Hero/Hero";
import Allinone from "./components/Allinone/Allinone";
import OrderList from "./components/OrderList/OrderList";
import CardComponent from "./components/CardComponent/CardComponent";

function App() {
  // const location = useLocation();
  // const currentPage = location.pathname;
  // const filteredPathName = currentPage.replace('/', '');

  // console.log("Current page : ",filteredPathName);

  return (
    <>
      {/* <h1 className="sr-only hidden">{filteredPathName}</h1> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/gallery" element={<Slider />} />
        <Route path="/faq" element={<Accordion />} />
        <Route path="/table" element={<Table />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/cards" element={<CardComponent />} />
        <Route path="/all-at-glance" element={<Allinone />} />
      </Routes>
    </>
  );
}

export default App;
