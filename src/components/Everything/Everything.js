import React from "react";
import Accordion from "../Accordion/Accordion";
import CardComponent from "../CardComponent/CardComponent";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import OrderList from "../OrderList/OrderList";
import Slider from "../Slider/Slider";
import Layout from "../Layout/Layout";
import Table from "../Table/Table";

const Everything = () => {
  return (
    <Layout>
      <CardComponent />
      <Slider />
      <OrderList />
      <Accordion />
      <Table/>
      <Form />
    </Layout>
  );
};

export default Everything;
