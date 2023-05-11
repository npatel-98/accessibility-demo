import React from 'react'
import sliderImg from '../../images/slider-fail.png';
import tableImg from '../../images/table-fails.jpeg';
import accordionImg from '../../images/accordion-fails.jpeg';

const Dashboard = () => {
    const COMPONENTS = [
        {
            "title": "Slider",
            "path": "/slider",
            "info": "kuck bhi likh do aur samaj loh",
            "imagePath": sliderImg,
            // "src": "../images/slider-fail.png",
        },
        {
            "title": "Accordion",
            "path": "/accordion",
            "info": "kuck bhi likh do aur samaj loh",
            "imagePath": accordionImg,
        },
        {
            "title": "Form",
            "path": "/form",
            "info": "kuck bhi likh do aur samaj loh",
            "imagePath": sliderImg,
        },
        {
            "title": "Table",
            "path": "/table",
            "info": "kuck bhi likh do aur samaj loh",
            "imagePath": tableImg,
        },
        {
            "title": "All-In-One",
            "path": "/everything",
            "info": "kuck bhi likh do aur samaj loh",
            "imagePath": sliderImg,
        },
        {
          "title": "Hero",
          "path": "/hero",
          "info": "kuck bhi likh do aur samaj loh",
          "imagePath": sliderImg,
      },
    ];
    const svgComponent = (
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    )

  return (
    <div className='bg-white flex flex-cols flex-wrap gap-y-10 gap-x-4 p-3 md:p-10 h-full'>
        {
            COMPONENTS.map( (item) => {
                return (
                    <div 
                      className="w-full md:w-1/3 max-w-[400px]  bg-black border border-gray-200 rounded-[16px] shadow dark:bg-gray-800 dark:border-gray-700 max-h-[400px]">
                        <div className='m-4'>
                          <img alt="" 
                              className="inline-block hidden lg:block w-full h-[200px] bg-cover rounded-[16px] " 
                              src={item.imagePath}
                          />
                        </div>
                        <div className="p-5 pt-2">
                          <a href={item.path} className="">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-yellow-300 dark:text-white uppercase">{item.title}</h5>
                          </a>
                          <p className="mb-3 font-normal text-white dark:text-gray-400">
                              {item.info}
                          </p>
                          <a href={item.path} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent hover:cursor-pointer">
                              Click to go
                              {svgComponent}
                          </a>
                        </div>
                    </div>
                )
            })
        }
        

    </div>
  )
}

export default Dashboard