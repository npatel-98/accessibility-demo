import React from "react";
import Layout from "../Layout/Layout";
import Accordion from "../Accordion/Accordion";
import CardComponent from "../CardComponent/CardComponent";
import Form from "../Form/Form";
import OrderList from "../OrderList/OrderList";
import Slider from "../Slider/Slider";
import Table from "../Table/Table";

const Allinone = () => {
  return (
    <Layout>
      <CardComponent />
      <Slider />
      <OrderList />
      <Accordion />
      <Table />
      <Form />
    </Layout>
  );
};

export default Allinone;
