import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import className from 'classnames';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className='hover:cursor-pointer'>
            {items.submenu ? (
                <>
                {/* flex justify-center items-center */}
                    <div className='dropdown relative text-neutral-900 hover:text-indigo-400'>
                        <Link 
                            type="button" 
                            aria-haspopup="menu"
                            className="mx-4 text-lg font-bold  whitespace-nowrap focus:text-indigo-400"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {items.title}{''}
                            <span className="pl-3 focus:text-indigo-400"
                                aria-expanded={dropdown ? "true" : "false"}
                                onClick={() => setDropdown((prev) => !prev)}
                            >
                                <svg class="fill-current h-4 w-4 ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10l5 5 5-5z" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                    
                    <Dropdown className={className('',{
                        'hidden': !dropdown,
                        'shown': dropdown,
                    })} submenus={items.submenu} dropdown={dropdown}/>

                </>
            ) : (
                <Link
                    to={items.url}
                    className="mx-4 text-lg text-neutral-900 font-bold hover:text-indigo-400  focus:text-indigo-400">
                    {items.title}
                </Link>
            )}
        </li>
    );
};

export default MenuItems;