import React from "react";
import sliderImg from "../../images/slider-fail.png";
import tableImg from "../../images/table-fails.jpeg";
import accordionImg from "../../images/accordion-fails.jpeg";
import {Link} from "react-router-dom";
import Layout from "../Layout/Layout";
const Dashboard = () => {
  const COMPONENTS = [
    {
      title: "Slider",
      path: "/slider",
      info: "kuck bhi likh do aur samaj loh",
      imagePath: sliderImg,
      btnText: "Explore Slider",
      // "src": "../images/slider-fail.png",
    },
    {
      title: "Accordion",
      path: "/accordion",
      info: "kuck bhi likh do aur samaj loh",
      imagePath: accordionImg,
      btnText: "Explore Accordion",
    },
    {
      title: "Form",
      path: "/form",
      info: "kuck bhi likh do aur samaj loh",
      imagePath: sliderImg,
      btnText: "Explore Form",
    },
    {
      title: "Table",
      path: "/table",
      info: "kuck bhi likh do aur samaj loh",
      imagePath: tableImg,
      btnText: "Explore Table",
    },
    {
      title: "All-In-One",
      path: "/everything",
      info: "kuck bhi likh do aur samaj loh",
      imagePath: sliderImg,
      btnText: "Explore All-In-One",
    },
    {
      title: "Hero",
      path: "/hero",
      info: "kuck bhi likh do aur samaj loh",
      imagePath: sliderImg,
      btnText: "Explore Hero",
    },
  ];
  const svgComponent = (
    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
    </svg>
  );

  return (
    <Layout>
      <div className=" bg-gradient-from-bl-to-tr from-red-500 to-blue-500 flex flex-cols flex-wrap gap-y-10 gap-x-4 p-3 md:p-10 h-full">
        {COMPONENTS.map((item, index) => {
          return (
            <div className="w-full md:w-1/3 max-w-[400px]  bg-black border border-black rounded-[16px] shadow dark:bg-gray-800 dark:border-gray-700 max-h-[400px]" key={index}>
              <div className="m-4">
                <img alt="" className="inline-block lg:block w-full h-[200px] bg-cover rounded-[16px] " src={item.imagePath} />
              </div>
              <div className="p-5 pt-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-300 dark:text-white uppercase">{item.title}</h5>
                <p className="mb-3 font-normal text-white dark:text-gray-400">{item.info}</p>
                <Link to={item.path} className="inline-flex items-center text-sm font-medium text-center bg-transparent hover:bg-yellow-300 focus:bg-yellow-300  text-yellow-300 hover:text-black focus:text-black rounded shadow hover:shadow-lg focus:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent focus:border-transparent hover:cursor-pointer">
                  {item.btnText}
                  {svgComponent}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Dashboard;
