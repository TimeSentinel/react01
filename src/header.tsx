import {Link} from "react-router-dom";
import Lance from './images/lance800.webp'

function Header() {
    function PageSelect(data: string) {
        const homeClass = document.getElementById('btnHome') as HTMLInputElement
        const portfolioClass = document.getElementById('btnPortfolio') as HTMLInputElement
        const resumeClass = document.getElementById('btnResume') as HTMLInputElement
        const freelanceClass = document.getElementById('btnFreelance') as HTMLInputElement
        const restaurantClass = document.getElementById('btnRestaurant') as HTMLInputElement
        const contactClass = document.getElementById('btnContact') as HTMLInputElement

        const selection: string = data;
        // let codePlay;
        switch (data) {
            case 'home':
                homeClass.className = "menuSelected";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'portfolio':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuSelected ";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'resume':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuSelected";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'freelance':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuSelected";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'restaurant':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                restaurantClass.className = "menuSelected";
                freelanceClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'contact':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuSelected";
                break;
            default:
                homeClass.className = "menuSelected";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
        }
        return {selection}
    }


    return (
        <>

            <div className="header-title">
                <div className="headImg"><img src={Lance} alt="Lance on beach"/></div>
                <div className="headName"><h1>Lance Stubblefield</h1></div>


                    <div className="navMenu" id="navbar-default">
                        <ul className="menuBar">
                            <li>
                                <Link to="/" id="btnHome" className="menuSelected" onClick={() => PageSelect("home")}>
                                    Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" id="btnPortfolio" className="menuItem"
                                      onClick={() => PageSelect("portfolio")}>
                                    Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/resume" id="btnResume" className="menuItem"
                                      onClick={() => PageSelect("resume")}>
                                    Resume</Link>
                            </li>
                            <li>
                                <Link to="/freelance" id="btnFreelance" className="menuItem"
                                      onClick={() => PageSelect("freelance")}>
                                    Packages</Link>
                            </li>
                            <li>
                                <Link to="/restaurant" id="btnRestaurant" className="menuItem"
                                      onClick={() => PageSelect("restaurant")}>
                                    Restaurant</Link>
                            </li>
                            <li>
                                <Link to="/contact" id="btnContact" className="menuItem"
                                      onClick={() => PageSelect("contact")}>
                                    Contact</Link>
                            </li>
                        </ul>
                    </div>

            </div>


        </>
    )
}

export default Header;
