
import { Outlet } from "react-router-dom";
import HeaderLogo from "../../images/HZTL_grey_workshop.png";
import Navbar from "../Navbar";

const Header = () => {

// for the header we use aria-expand concepts 

    return (
        <header className="bb-bottom-3 bg-[#F8FAFB]">

            <div className=' list-none mb-20'>

                <div className="header__wrapper container mx-auto flex flex-row justify-between items-center flex-wrap">
                    <div className='header ml-4' tabIndex="0">
                        <img src={HeaderLogo} height={180} width={160} className=" fill-black" alt='navigation logo' objectfit="cover"/>
                    </div>
                    <Navbar />
                </div>
            </div>
            <Outlet />
        </header>
    )
}
export default Header;