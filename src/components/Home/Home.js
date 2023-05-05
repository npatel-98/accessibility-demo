import React from 'react'
import Accordion from '../Accordion/Accordion'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'

// helper function
export const isEnterPressed = (event) => {
  let keyCode = event.keyCode || event.which;
  return keyCode === 13 ? true : false;
};

const Home = () => {

  // skip-to-content handler function 
  const handleSkipToContent = (evt) => {
    if (evt.type === 'click' || (evt.type === 'keydown' && isEnterPressed(evt))) {
      evt.preventDefault();
      const mainContentEle = document.getElementById('main-content');
      if (mainContentEle) {
        mainContentEle.focus();
        window.scrollTo(0, 0);
        window.history.pushState('', '', evt.target.hash);
      }
    }
  };
  return (
    <>
      <div id="skip-to-content" className=' block absolute h-[33px] -top-36 left-1/2 -translate-x-2/4 z-40 focus-within:-top-1'>
        <a href="#main-content" className='relative whitespace-nowrap text-black text-sm' onKeyDown={handleSkipToContent} onClick={handleSkipToContent}>
          Skip to Content
        </a>
      </div>
      
      <Header></Header>
      <Accordion></Accordion>
      <Slider></Slider>
      <div id='main-content'>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  )
}

export default Home;