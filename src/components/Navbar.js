import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='flex flex-row justify-end mr-4'>
            <li className='hover:cursor-pointer'>
                <Link
                    to="/tabs"
                    className="mx-4 text-xl text-neutral-900 font-bold hover:underline underline-offset-8 focus:outline-dashed-3 outline-indigo-700">
                    Tabs
                </Link>
            </li>
            <li className='cursor-pointer'>
                <Link
                    to="/slider"
                    className="mx-4 text-xl text-neutral-900 font-bold hover:underline underline-offset-8 focus:outline-dashed-3 outline-indigo-700">
                    Image Slider
                </Link>
            </li>
            <li className='cursor-pointer '>
                <Link
                    to="/accordion"
                    className="text-xl mx-4 text-neutral-900 font-bold hover:underline underline-offset-8 focus:outline-dashed-3 outline-indigo-700">
                    Accordion
                </Link>
            </li>
        </nav>
    )
}

export default Navbar