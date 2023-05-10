import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Slider() {
    const SLIDES_DATA = [
        {
            id:"1",
            title: "slide 1",
            src: "https://wallpaperaccess.com/full/441330.jpg",
            alt: "sd_1",
        },
        {
            id:"2",
            title: "slide 2",
            src: "https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/transp_img0056_small.jpg",
            alt: "sd_2",
        },
        {
            id:"3",
            title: "slide 3",
            src: "https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/70hc958_banner.jpg",
            alt: "sd_3",
        },
        {
            id:"4",
            title: "slide 4",
            src: "https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/1es_agn_aurore.jpg",
            alt: "sd_4",
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
      className="bg-theme-bg border-b-primary border-black dark:border-gray dark:border-b-primary rounded list-none box-content container mx-auto mb-20"
    >
        <Splide 
            aria-label="My Favorite Images" 
            className="splide__wrapper" 
            options={options}
        >

            {
                SLIDES_DATA.map((slider,index) => {
                    return (
                        <SplideSlide className="image__wrapper -webkit-text-center text-center object-contain" key={index}>
                            <img className="pt-2  w-full h-full" src={slider.src} alt={slider.alt}  />
                        </SplideSlide>
                    );
                })
            }

        </Splide>
    </div>
  );
}

export default Slider;
