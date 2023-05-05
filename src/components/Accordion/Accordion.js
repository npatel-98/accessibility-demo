import React, { useState } from 'react'
import className from 'classnames';

const Accordion = () => {

    // json data: 
    const DATA = [
        {
            fields: {
                question: {
                    value: "Where is the sun located?"
                },
                answer:"in solar system"
            }
        },
        {
            fields: {
                question: {
                    value: "Only human sustainable planet in the Solar System?"
                },
                answer:"Earth"
            }
        },
        {
            fields: {
                question: {
                    value: "Coldest planet in the solar system"
                },
                answer:"Uranus"
            }
        }

    ];

    // state management for accordions:
    const [ isOpen, setIsOpen ] = useState(false);
    const [ currentAccordion, setCurrentAccordion ] = useState(0);

    const clickHandleraccordion = (index) => {
        setCurrentAccordion(index);
        if(currentAccordion === index){
            setIsOpen(!isOpen)
        }else{
            setIsOpen(isOpen)
        }
    }

  return (
    <div
        className="bg-theme-bg border-b-primary border-black dark:border-gray dark:border-b-primary p-2 rounded list-none mb-20"
    >
        <div className="flex flex-col justify-between items-center">
            {DATA.map((item, index) => {
            return (
                <div className="w-9/12 mb-6" key={index}>
                <div
                onClick = { () => clickHandleraccordion(index)}
                    className={className('accordion flex flex-row justify-between w-full p-4 bg-indigo-400', {
                    'bg-indigo-200': isOpen && currentAccordion === index ,
                    'bg-indigo-400': !isOpen,
                    })}
                >
                    {item?.fields?.question?.value}
                    <button className=" text-2xl ">{isOpen && currentAccordion === index  ? " - " : " + "}</button>
                </div>

                <div 
                    className={className(`accordion_content ac_${index} p-4 bg-indigo-200`, {
                    'hidden': !isOpen || currentAccordion !== index,
                    'shown': (isOpen && currentAccordion === index)
                    })}
                >
                    <p>{item.fields.answer}</p>
                    {/* <a href='#'>vraj</a> */}
                </div>

                </div>
            );
            })}
        </div>
    </div>
  )
}

export default Accordion