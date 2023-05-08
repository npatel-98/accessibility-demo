import React from 'react'
import Accordion from '../Accordion/Accordion'
import CardComponent from '../CardComponent/CardComponent';
import Form from '../Form/Form';
import Header from '../Header/Header'
import OrderList from '../OrderList/OrderList';
import Slider from '../Slider/Slider'

// helper function
// export const isEnterPressed = (event) => {
//   let keyCode = event.keyCode || event.which;
//   return keyCode === 13 ? true : false;
// };

const Home = () => {

  // skip-to-content handler function 
  // const handleSkipToContent = (evt) => {
  //   if (evt.type === 'click' || (evt.type === 'keydown' && isEnterPressed(evt))) {
  //     evt.preventDefault();
  //     const mainContentEle = document.getElementById('main-content');
  //     if (mainContentEle) {
  //       mainContentEle.focus();
  //       window.scrollTo(0, 0);
  //       window.history.pushState('', '', evt.target.hash);
  //     }
  //   }
  // };
  return (
    <>
      {/* <div id="skip-to-content" className=' block absolute h-[33px] -top-36 left-1/2 -translate-x-2/4 z-40 focus-within:-top-1'>
        <a href="#main-content" className='relative whitespace-nowrap text-black text-sm' >
          Skip to Content
        </a>
      </div> */}
      
      <Header />
      <Accordion />
      <Slider />
      <Form />
      <OrderList />
      <CardComponent />
    </>
  )
}

export default Home;