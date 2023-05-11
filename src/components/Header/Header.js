
import { Outlet, Link } from "react-router-dom";
import HeaderLogo from "../../images/HZTL_grey_workshop.png";
import Navbar from "../Navbar";

const Header = () => {

// for the header we use aria-expand concepts 

    return (
        <header className="bb-bottom-3 primaryColor">

            <div className='list-none'>

                <div className="header__wrapper container mx-auto flex flex-row justify-between items-center flex-wrap">
                    <Link
                        role="button"
                        to="/"
                        tabIndex="0"
                    >
                        <img src={HeaderLogo} height={180} width={160} className=" fill-black cursor-pointer" alt='navigation logo' objectfit="cover"/>
                    </Link>
                    <Navbar />
                </div>
            </div>
            <Outlet />
        </header>
    )
}
export default Header;