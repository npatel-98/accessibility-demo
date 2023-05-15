import React, { useState } from "react";
import className from "classnames";

const Accordion = () => {
  // json data:
  const DATA = [
    {
      fields: {
        question: {
          value: "Where is the sun located?",
        },
        answer: "Duis ac magna vel urna pharetra iaculis vel et nibh. Mauris facilisis venenatis tempor. Sed porta, ipsum dictum rhoncus porttitor, neque odio sodales elit, at tincidunt eros lacus nec felis. Cras a porttitor mi, at ullamcorper neque. Aliquam at leo bibendum, ornare arcu sit amet, maximus ante. Fusce id enim.",
      },
    },
    {
      fields: {
        question: {
          value: "Only human sustainable planet in the Solar System?",
        },
        answer: "Duis ac magna vel urna pharetra iaculis vel et nibh. Mauris facilisis venenatis tempor. Sed porta, ipsum dictum rhoncus porttitor, neque odio sodales elit, at tincidunt eros lacus nec felis. Cras a porttitor mi, at ullamcorper neque. Aliquam at leo bibendum, ornare arcu sit amet, maximus ante. Fusce id enim.",
      },
    },
    {
      fields: {
        question: {
          value: "Coldest planet in the solar system",
        },
        answer: "Duis ac magna vel urna pharetra iaculis vel et nibh. Mauris facilisis venenatis tempor. Sed porta, ipsum dictum rhoncus porttitor, neque odio sodales elit, at tincidunt eros lacus nec felis. Cras a porttitor mi, at ullamcorper neque. Aliquam at leo bibendum, ornare arcu sit amet, maximus ante. Fusce id enim.",
      },
    },
  ];

  // state management for accordions:
  const [currentAccordion, setCurrentAccordion] = useState(null);

  const toggleClick = (i) => {
    if( currentAccordion === i){
        return setCurrentAccordion(null)
    }
    setCurrentAccordion(i);
  }
  return (
    <div className="accordion__component bg-theme-bg border-b-primary border-black dark:border-gray dark:border-b-primary p-2 rounded list-none mb-20 flex flex-col justify-center items-center h-full">

        {/* Accordion Titles */}
        <div className="py-4 w-9/12 px-8 mb-12 text-center ">
            <h2 className="text-4xl font-bold pb-8">Frequently Asked Questions</h2>
            <p className="text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
        </div>
        
        {/* Accordion Wrapper */}
        <ul className="accordion__wrapper w-9/12 center flex flex-col justify-between items-center rounded-lg p-2 shadow-md shadow-stone-700 border-t-2 py-4 box-shadow-md-top-bottom">
            {
                DATA.map((item, index) => {
                    return (
                        <li
                        className="accordions w-full border-b-2 border-white-300 divide-y-2 divide-slate-200 last:border-b-0"
                        key={index}
                        
                        >
                            <div
                                onClick={() => toggleClick(index)}
                                className={className(
                                "accordion flex flex-row justify-between w-full p-4 text-md font-bold",)}
                                id={`accordion_title_${index}`}
                            >
                                {item?.fields?.question?.value}
                                {/* svg to place here */}
                                <button className=" text-2xl " type="button">
                                {currentAccordion === index ? " - " : " + "}
                                </button>
                            </div>

                            <div
                                className={className(
                                `accordion_content ac_${index} p-4 text-gray-500 text-sm font-bold`,
                                {
                                    "max-h-none hidden": currentAccordion !== index,
                                    "max-h-72 shown transition ease-in-out delay-500 duration-500": currentAccordion === index
                                }
                                )}
                                aria-labelledby={`accordion_title_${index}`}
                                role="tab"
                            >
                                <p>{item.fields.answer}</p>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    </div>
  );
};

export default Accordion;
