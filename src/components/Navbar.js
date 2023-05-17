import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';

import MenuItems from './MenuItems';
export const menuItems = [
    {
        title: 'Tabs',
        url: '/tabs',
        submenu: [
            {
                title: 'Web design',
                url: '#',
            },
            {
                title: 'Web development',
                url: '#',
            },
            {
                title: 'SEO',
                url: '#',
            },
        ],
    },
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Explore',
        url: '/explore',
    },
    {
        title: 'Gallery',
        url: '/gallery',
    },
    {
        title: 'FAQs',
        url: '/faq',
    },
    {
        title: 'Contact Us',
        url: '/contact',
    },
    {
        title: 'Data',
        url: '/table',
    },
    {
        title: 'All at Glance',
        url: '/all-at-glance',
    }
];

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