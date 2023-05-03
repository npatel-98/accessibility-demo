
import { Outlet,Link } from "react-router-dom";
import headerLogo from "../../images/cluster.jpeg";

const Header = () => {
    return (
        <>
            <div className='flex flex-row justify-between items-center container mx-auto bg-indigo-200 list-none p-5' >

                <div className='header ml-4'>
                    <a className='mx-4'>
                        <img src={headerLogo} height={60} width={180} alt='slide 1 image' objectfit="cover"/>
                    </a>
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

            <Outlet />
        </>
    )
}
export default Header;