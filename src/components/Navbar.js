import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
import menuItems from '../store/menuList';
import MenuItems from './MenuItems';

function Navbar() {

    // const navigate = useNavigate();
    // const goBack = () => {
    //     navigate(-1);
    // }

    // const BackButton = <button 
    //     className='p-2 border text-left bg-transparent rounded shadow 
    //     text-neutral-900 hover:text-neutral-900 hover:shadow-lg hover:bg-indigo-400 py-1 px-3 border border-transparent hover:border-indigo-400 hover: hover:cursor-pointer'
    //     onClick={() => goBack()}
    //     >
    //     Back
    // </button>
    return (
        <>
            <nav>
                <ul className='flex flex-wrap'>
                    {menuItems.map((menu, index) => {
                        return <MenuItems items={menu} key={index}/>;
                    })}
                </ul>
            </nav>
            {/* {BackButton} */}
            
        </>
    )
}

export default Navbar