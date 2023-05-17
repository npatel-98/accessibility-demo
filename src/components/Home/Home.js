import React from "react";
import sliderImg from "../../images/slide.jpg";
import tableImg from "../../images/table.jpg";
import accordionImg from "../../images/accordion.jpg";
import formImg from "../../images/form.jpg";
import heroImg from "../../images/hero.jpg";
import orderImg from "../../images/orderlist.jpg";
import cardImg from "../../images/card.jpg";
import allImg from "../../images/together.jpg";
import {Link} from "react-router-dom";
import Layout from "../Layout/Layout";
const Dashboard = () => {
  const COMPONENTS = [
    {
      title: "Slider",
      path: "/gallery",
      info: "Innovative & animated ways to showcase more than one image, video, or design resources on your website",
      imagePath: sliderImg,
      btnText: "Explore Slider",
      // "src": "../images/slider-fail.png",
    },
    {
      title: "Accordion",
      path: "/faq",
      info: "Used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling.",
      imagePath: accordionImg,
      btnText: "Explore Accordion",
    },
    {
      title: "Form",
      path: "/contact",
      info: "It collects user data and serves as the display or user interface within the system for that particular user.",
      imagePath: formImg,
      btnText: "Explore Form",
    },
    {
      title: "Table",
      path: "/table",
      info: "Data component that you can add to pages within your app for users to track, update, and automate your data at a glance.",
      imagePath: tableImg,
      btnText: "Explore Table",
    },
    {
      title: "Hero",
      path: "/hero",
      info: "Flexible component that can combine images, colours, text, links and CTAs for home page banners or promotional content.",
      imagePath: heroImg,
      btnText: "Explore Hero",
    },
    {
      title: "Ordered List",
      path: "/orderlist",
      info: "Organize and present information in a specific order or to present information in a structured sequence and sequential manner.",
      imagePath: orderImg,
      btnText: "Explore OrderList",
    },
    {
      title: "Card",
      path: "/cards",
      info: "Small information card or a mini digital container that holds related content or data in a visually appealing way.",
      imagePath: cardImg,
      btnText: "Explore Card",
    },
    {
      title: "All-In-One",
      path: "/everything",
      info: "Combining all the components into a single page for your better understanding and knowledge along with accessibility checkpoints",
      imagePath: allImg,
      btnText: "Explore All-In-One",
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
            <div className="w-full md:w-1/3 max-w-[400px]  bg-black border border-black rounded-[16px] shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
              <div className="m-4">
                <img alt="" className="inline-block lg:block w-full h-[200px] rounded-[16px] object-cover" src={item.imagePath} />
              </div>
              <div className="p-5 pt-2 flex flex-col justify-between">
                <div className="card_header">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-300 dark:text-white uppercase">{item.title}</h5>
                </div>
                <div className="card_body">
                  <p className="mb-3 font-normal text-white dark:text-gray-400">{item.info}</p>
                </div>
                <div className="card_footer">
                  <Link to={item.path} className="inline-flex items-center text-sm font-medium text-center bg-transparent hover:bg-yellow-300 focus:bg-yellow-300  text-yellow-300 hover:text-black focus:text-black rounded shadow hover:shadow-lg focus:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent focus:border-transparent hover:cursor-pointer">
                    {item.btnText}
                    {svgComponent}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Dashboard;
