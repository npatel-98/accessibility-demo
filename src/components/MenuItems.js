import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className='hover:cursor-pointer'>
            {items.submenu ? (
                <>
                    <Link 
                    type="button" 
                    aria-haspopup="menu"
                    className="mx-4 text-xl text-neutral-900 font-bold hover:underline underline-offset-8 focus:outline-dashed-3 outline-indigo-700"
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                    </Link>
                    <Dropdown submenus={items.submenu} dropdown={dropdown}/>
                </>
            ) : (
                <Link
                    to={items.url}
                    className="mx-4 text-xl text-neutral-900 font-bold hover:underline underline-offset-8 focus:outline-dashed-3 outline-indigo-700">
                    {items.title}
                </Link>
            )}
        </li>
    );
};

export default MenuItems;