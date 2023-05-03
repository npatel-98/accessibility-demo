
import { Outlet,Link } from "react-router-dom";
import headerLogo from "../../images/cluster.jpeg";

const Header = () => {
    return (
        <>
            <div className=' bg-indigo-200 list-none p-5 mb-20'>

                <div className="header__wrapper container mx-auto flex flex-row justify-between items-center">
                    <div className='header ml-4'>
                        <img src={headerLogo} height={60} width={180} alt='slide 1' objectfit="cover"/>
                    </div>

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
                </div>
                
            </div>

            <Outlet />
        </>
    )
}
export default Header;