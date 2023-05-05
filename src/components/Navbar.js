import React from 'react'
import MenuItems from './MenuItems';
export const menuItems = [
    {
        title: 'Tabs',
        url: '/tabs',
        submenu: [
            {
                title: 'web design',
                url: 'web-design',
            },
            {
                title: 'web development',
                url: 'web-dev',
            },
            {
                title: 'SEO',
                url: 'seo',
            },
        ],
    },
    {
        title: 'Image Slider',
        url: '/slider',
    },
    {
        title: 'Accordion',
        url: '/accordion',
    },
];

function Navbar() {
    return (
        <nav className='flex flex-row justify-end mr-4'>
            <ul className='flex'>
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
        </nav>
    )
}

export default Navbar