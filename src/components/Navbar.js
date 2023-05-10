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
    {
        title: 'Form',
        url: '/form',
    },
    {
        title: 'Table',
        url: '/table',
    }
];

function Navbar() {
    return (
        <nav className=''>
            <ul className='flex flex-wrap'>
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
        </nav>
    )
}

export default Navbar