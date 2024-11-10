/*
React Portfolio Project - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
header.tsx; React Router used for navigation
######################################################################################
 */

import './header.css'
import {Link} from "react-router-dom";
import HamMenuShow from "./hamMenu.tsx";
import {PageSelect, handleClick} from "./hamMenu.tsx";
import Lance from './images/lance800.webp'

function Header() {

    return (
        <>

            <div className="header-title">
                <div className="headImg"><img src={Lance} alt="Lance on beach"/></div>
                <div className="headinginator">
                    <div className="headName"><h1>Lance Stubblefield</h1></div>
                    <div className="hamburger" id="hamIcon"><HamMenuShow/></div>
                </div>
                <div className="navMenu" id="navBar">
                    <div className="menuBar">
                        <Link to="/" id="btnHome" className="menuSelected" onClick={() => PageSelect("home")}>
                            Home</Link>
                        <Link to="/portfolio" id="btnPortfolio" className="menuItem"
                              onClick={() => PageSelect("portfolio")}>
                            Portfolio</Link>
                        <Link to="/resume" id="btnResume" className="menuItem"
                              onClick={() => PageSelect("resume")}>
                            Accolades</Link>
                        <Link to="/freelance" id="btnFreelance" className="menuItem"
                              onClick={() => PageSelect("freelance")}>
                            Packages</Link>
                        <Link to="/restaurant" id="btnRestaurant" className="menuItem"
                              onClick={() => PageSelect("restaurant")}>
                            Restaurant</Link>
                        <Link to="/contact" id="btnContact" className="menuItem"
                              onClick={() => PageSelect("contact")}>
                            Contact</Link>
                    </div>
                </div>
                <div className="hamMenu hidden" id="hamBar">
                    <div className="hamBar">
                        <Link to="/" className="hamItem" onClick={handleClick}>Home</Link>
                        <Link to="/portfolio" className="hamItem" onClick={handleClick}>Portfolio</Link>
                        <Link to="/resume" className="hamItem" onClick={handleClick}>Accolades</Link>
                        <Link to="/freelance" className="hamItem" onClick={handleClick}>Packages</Link>
                        <Link to="/restaurant" className="hamItem" onClick={handleClick}>Restaurant</Link>
                        <Link to="/contact" className="hamItem" onClick={handleClick}>Contact</Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header;
