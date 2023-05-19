import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SLIDES_DATA from "../../store/sliderData";

const Slider = () => {

  const options = {
    perPage: 2,
    perMove: 1,
    rewind: true, // sets to initial slide after the last slide
    gap: 15,
    padding: {left: 10, right: 10},
  };
  return (
    <>
      <div className=" border-b-primary border-black dark:border-gray dark:border-b-primary rounded list-none box-content container mx-auto mb-20">
        <Splide aria-label="My Favorite Images" className="splide__wrapper px-3 md:px-12" options={options}>
          {SLIDES_DATA.map((slider, index) => {
            return (
              <SplideSlide className="image__wrapper -webkit-text-center text-center object-contain" key={index}>
                <img className="pt-2  w-full h-full" src={slider.src} alt={slider.alt} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Slider;
