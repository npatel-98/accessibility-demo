import React from 'react'
import Accordion from '../Accordion/Accordion'
import CardComponent from '../CardComponent/CardComponent';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import OrderList from '../OrderList/OrderList';
import Slider from '../Slider/Slider'

const Everything = () => {
  return (
    <div className=''>
      <CardComponent />
      <Slider />
      <OrderList />
      <Accordion />
      <Form />
      <Footer />
    </div>
  )
}

export default Everything;