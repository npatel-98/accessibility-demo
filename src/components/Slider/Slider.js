import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Slider() {
    const SLIDES_DATA = [
        {
            id:"1",
            title: "slide 1",
            src: "/cluster.jpeg",
            alt: "sd",
        },
        {
            id:"2",
            title: "slide 2",
            src: "/nasa1.jpeg",
            alt: "sd",
        },
        {
            id:"3",
            title: "slide 3",
            src: "/f5.jpeg",
            alt: "sd",
        },
        {
            id:"4",
            title: "slide 4",
            src: "/f7.jpeg",
            alt: "sd",
        },
        
    ];
    const options = {
        perPage: 2,
        perMove: 1,
        rewind: true, // sets to initial slide after the last slide
        gap: 20,
        padding: { left: 15, right: 15}
    };
  return (
    <div
      className="bg-theme-bg border-b-primary border-black dark:border-gray dark:border-b-primary rounded list-none box-content"
      data-component="authorable/general/Header"
      data-testid="Header"
    >
      <h1 className="text-3xl mb-10 hover:text-cyan-700 transition-colors duration-500 delay-200 "
      >Splide Slider</h1>

      <Splide aria-label="My Favorite Images" className="" options={options}>

        {
            SLIDES_DATA.map((slider) => {
                return (
                    <SplideSlide className="-webkit-text-center text-center pt-20 relative h-[500px]">
                        <img className="pt-2" src={slider.src} alt='slide 1 image' objectFit="cover" />
                    </SplideSlide>
                );
            })
        }

      </Splide>
    </div>
  );
}

export default Slider;
