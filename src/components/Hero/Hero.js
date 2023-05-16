import React from "react";
import Layout from "../Layout/Layout";
const Hero = () => {
  const DATA = {
    title: "Workshop",
    name: "Accessibility: The main pillar",
    info: "Welcome and let's deep dive into the ocean of accessibilitly",
    link: "/list",
  };
  return (
    <Layout>
      <section>
        <div className="bg-black text-white py-20 h-screen">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">{DATA.title}</h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">{DATA.name}</h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">{DATA.info}</p>
              <a href={DATA.link} className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent hover:cursor-pointer">
                Explore Now
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div>
                  <img alt="" className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" />
                </div>
                <div>
                  <img alt="" className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" />
                </div>
                <div>
                  <img alt="" className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hero;
