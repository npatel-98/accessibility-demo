import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import className from 'classnames';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    const vv = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (dropdown && vv.current && !vv.current.contains(e.target)) {
            setDropdown(false);
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [dropdown])

    return (
        <li className='hover:cursor-pointer' role="menuitem">
            {items.submenu ? (
                <>
                {/* flex justify-center items-center */}
                    <div className='dropdown relative text-neutral-900 hover:text-indigo-400 flex flex-row items-center'>
                        <Link 
                            type="button" 
                            aria-haspopup="menu"
                            className="mx-4 mr-2 text-lg font-bold whitespace-nowrap focus:text-indigo-400"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {items.title}
                        </Link>
                        <span className="pr-3 pb-1 focus:text-indigo-400 active:text-in whitespace-nowrap text-left"
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            <svg className="fill-current h-4 w-4 ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10l5 5 5-5z" />
                            </svg>
                        </span>
                    </div>
                    
                    <Dropdown className={className('',{
                        'hidden': !dropdown,
                        'shown': dropdown,
                    })} submenus={items.submenu} dropdown={dropdown} vv={vv}/>

                </>
            ) : (
                <Link
                    role="button"
                    to={items.url}
                    className="mx-4 text-lg text-neutral-900 font-bold hover:text-indigo-400  focus:text-indigo-400">
                    {items.title}
                </Link>
            )}
        </li>
    );
};

export default MenuItems;