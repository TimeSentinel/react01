import {Link} from "react-router-dom";

function Header() {
    function PageSelect(data: string) {
        const homeClass = document.getElementById('btnHome') as HTMLInputElement
        const portfolioClass = document.getElementById('btnPortfolio') as HTMLInputElement
        const packagesClass = document.getElementById('btnPackages') as HTMLInputElement
        const contactClass = document.getElementById('btnContact') as HTMLInputElement

        const selection: string = data;
        // let codePlay;
        switch (data) {
            case 'home':
                homeClass.className = "menuSelected";
                portfolioClass.className = "menuItem ";
                packagesClass.className = "menuItem ";
                contactClass.className = "menuItem ";
                break;
            case 'portfolio':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuSelected ";
                packagesClass.className = "menuItem ";
                contactClass.className = "menuItem ";
                break;

            case 'packages':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem ";
                packagesClass.className = "menuSelected ";
                contactClass.className = "menuItem ";
                break;
            case 'contact':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem ";
                packagesClass.className = "menuItem ";
                contactClass.className = "menuSelected ";
                break;
            default:
                homeClass.className = "menuSelected";
                portfolioClass.className = "menuItem ";
                packagesClass.className = "menuItem ";
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

            <nav className="navbar">
                <div className="max-w-screen-xl flex flex-wrap justify-between ">

                    <button data-collapse-toggle="navbar-default" type="button"
                            className="inline-flex justify-items-end px-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="navMenu" id="navbar-default">
                        <ul className="menuBar">
                            <li>
                                <Link to="/" id="btnHome" className="menuSelected" onClick={() => PageSelect("home")}>
                                    Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" id="btnPortfolio" className="menuItem" onClick={() => PageSelect("portfolio")}>
                                    Portfolio</Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link to="/resume" className="menuItem" onClick={() => PageSelect("home")}>
                            Resume</Link>*/}
                            {/*</li>*/}
                            <li>
                                <Link to="/packages" id="btnPackages" className="menuItem" onClick={() => PageSelect("packages")}>
                                    Packages</Link>
                            </li>
                            <li>
                                <Link to="/contact" id="btnContact" className="menuItem" onClick={() => PageSelect("contact")}>
                                    Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header;
