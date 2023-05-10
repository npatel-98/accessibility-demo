import React from 'react'
import Accordion from '../Accordion/Accordion'
import CardComponent from '../CardComponent/CardComponent';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Header from '../Header/Header'
import OrderList from '../OrderList/OrderList';
import Slider from '../Slider/Slider'

const Everything = () => {
  return (
    <>
      <Header />
      <Accordion />
      <Slider />
      <OrderList />
      <CardComponent />
      <Form />
      <Footer />
    </>
  )
}

export default Everything;