function Header() {
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
                                <a href="#" className="menuSelected" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="menuItem">About</a>
                            </li>
                            <li>
                                <a href="#" className="menuItem">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" className="menuItem">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="menuItem">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header;
