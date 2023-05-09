
import { Outlet } from "react-router-dom";
import headerLogo from "../../images/images.jpeg";
import HeaderLogo from '../../images/dark_with_white_background.jpg'
import Navbar from "../Navbar";

const Header = () => {

// for the header we use aria-expand concepts 

    return (
        <header className="bb-bottom-3">

            <div className=' list-none p-5 mb-20'>

                <div className="header__wrapper container mx-auto flex flex-row justify-between items-center">
                    <div className='header ml-4' tabIndex="0">
                        <img src={HeaderLogo} height={50} width={60} className=" fill-black" alt='navigation logo' objectfit="cover"/>
                    </div>
                    <Navbar />
                </div>
            </div>
            <Outlet />
        </header>
    )
}
export default Header;