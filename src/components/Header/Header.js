
import { Outlet } from "react-router-dom";
import headerLogo from "../../images/images.jpeg";
import Navbar from "../Navbar";

const Header = () => {

// for the header we use aria-expand concepts 

    return (
        <>
            <div className=' bg-indigo-200 list-none p-5 mb-20'>

                <div className="header__wrapper container mx-auto flex flex-row justify-between items-center">
                    <div className='header ml-4' tabIndex="0">
                        <img src={headerLogo} height={50} width={60} className=" fill-black" alt='navigation logo' objectfit="cover"/>
                    </div>
                    <Navbar />
                </div>
            </div>

            <Outlet />
        </>
    )
}
export default Header;