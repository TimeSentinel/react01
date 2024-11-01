import {Link} from "react-router-dom";

function Header() {
    function PageSelect(data: string) {
        const homeClass = document.getElementById('btnHome') as HTMLInputElement
        const portfolioClass = document.getElementById('btnPortfolio') as HTMLInputElement
        const freelanceClass = document.getElementById('btnFreelance') as HTMLInputElement
        const restaurantClass = document.getElementById('btnRestaurant') as HTMLInputElement
        const contactClass = document.getElementById('btnContact') as HTMLInputElement

        const selection: string = data;
        // let codePlay;
        switch (data) {
            case 'home':
                homeClass.className = "menuSelected";
                portfolioClass.className = "menuItem ";
                freelanceClass.className = "menuItem ";
                restaurantClass.className = "menuItem ";
                contactClass.className = "menuItem ";
                break;
            case 'portfolio':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuSelected ";
                freelanceClass.className = "menuItem ";
                restaurantClass.className = "menuItem ";
                contactClass.className = "menuItem ";
                break;
            case 'freelance':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem ";
                freelanceClass.className = "menuSelected ";
                restaurantClass.className = "menuItem ";
                contactClass.className = "menuItem ";
                break;
            case 'restaurant':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem ";
                restaurantClass.className = "menuSelected ";
                freelanceClass.className = "menuItem ";
                contactClass.className = "menuItem ";
                break;
            case 'contact':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem ";
                freelanceClass.className = "menuItem ";
                restaurantClass.className = "menuItem ";
                contactClass.className = "menuSelected ";
                break;
            default:
                homeClass.className = "menuSelected";
                portfolioClass.className = "menuItem ";
                freelanceClass.className = "menuItem ";
                restaurantClass.className = "menuItem ";
                contactClass.className = "menuItem ";
                break;
        }
        return {selection}
    }


    return (
        <>
            <div className="header-title">
                <h1>Lance Stubblefield</h1>
            </div>

            <nav>

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
                            {/*<li>*/}
                            {/*    <Link to="/resume" className="menuItem" onClick={() => PageSelect("home")}>
                            Resume</Link>*/}
                            {/*</li>*/}
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

            </nav>


        </>
    )
}

export default Header;
